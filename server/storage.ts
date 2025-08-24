import { type User, type InsertUser, type ContactMessage, type InsertContactMessage, type NewsItem, type Event } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getNewsItems(limit?: number): Promise<NewsItem[]>;
  getEvents(upcoming?: boolean): Promise<Event[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactMessages: Map<string, ContactMessage>;
  private newsItems: Map<string, NewsItem>;
  private events: Map<string, Event>;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.newsItems = new Map();
    this.events = new Map();
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize with real CAPA news items
    const newsData: Omit<NewsItem, 'id'>[] = [
      {
        title: "Definitive approval of CAPA as UNIZAR Research Institute",
        excerpt: "The Governing Council of the University of Zaragoza has definitively approved the creation of the Center for Astroparticles and High Energies (CAPA), as well as its internal regulations.",
        content: "The Governing Council of the University of Zaragoza has definitively approved the creation of the Center for Astroparticles and High Energies (CAPA), as well as its internal regulations. The fundamental objective of the University Research Institute Center for Astroparticles and High Energy Physics is to promote research in the fields of high-energy physics, nuclear and astroparticle physics.",
        imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date('2024-12-15'),
        isPublished: true
      },
      {
        title: "Dark Quantum in the Tercer Milenio science supplement",
        excerpt: "The DarkQuantum project, coordinated from CAPA, was recently featured in the Tercer Milenio science section of Heraldo de Aragón.",
        content: "The DarkQuantum project, coordinated from the Center for Astroparticles and High Energy Physics (CAPA) at the University of Zaragoza, was recently featured in the Tercer Milenio science section of the newspaper Heraldo de Aragón. The article highlights the project's innovative approach, combining quantum technologies and particle physics to tackle one of the greatest mysteries of the universe.",
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date('2024-12-10'),
        isPublished: true
      },
      {
        title: "Ultra-high-energy cosmic messengers",
        excerpt: "Rafael Alves Batista delivered an insightful talk on the origins of the most energetic particles in the Universe.",
        content: "Professor Rafael Alves Batista from Institut d'Astrophysique de Paris at the Sorbonne Université presented a comprehensive overview of ultra-high-energy cosmic messengers. The origins of the most energetic particles in the Universe have been a long-standing puzzle. In the quest to identify their sources, it is crucial to understand how these particles propagate through space.",
        imageUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date('2024-12-05'),
        isPublished: true
      }
    ];

    newsData.forEach(item => {
      const id = randomUUID();
      this.newsItems.set(id, { ...item, id });
    });

    // Initialize with real CAPA events
    const eventsData: Omit<Event, 'id' | 'createdAt'>[] = [
      {
        title: "DESI-Y1: New light on the dark Universe",
        description: "The beginning of the 21st century brought the development and confirmation of the standard model of cosmology, LCDM. The Universe is made of a 70% of dark energy in the form of a cosmological constant.",
        speaker: "Dr. Eusebio Sánchez, CIEMAT",
        eventDate: new Date('2025-01-15T15:00:00'),
        location: "CAPA Auditorium",
        registrationUrl: "https://capa.unizar.es/events/register"
      },
      {
        title: "Ultra-high-energy cosmic messengers",
        description: "The origins of the most energetic particles in the Universe have been a long-standing puzzle. Understanding their sources and propagation mechanisms.",
        speaker: "Dr. Rafael Alves Batista, Institut d'Astrophysique de Paris",
        eventDate: new Date('2025-01-22T16:00:00'),
        location: "Universidad de Zaragoza",
        registrationUrl: "https://capa.unizar.es/events/register"
      },
      {
        title: "DarkQuantum Project Workshop",
        description: "Intensive workshop on quantum technologies and particle physics applications. Collaborative research opportunities and latest developments in the field.",
        speaker: "CAPA Research Team",
        eventDate: new Date('2025-02-05T09:00:00'),
        location: "CAPA Research Facilities",
        registrationUrl: "https://capa.unizar.es/events/register"
      }
    ];

    eventsData.forEach(item => {
      const id = randomUUID();
      this.events.set(id, { ...item, id, createdAt: new Date() });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
      isRead: false,
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getNewsItems(limit?: number): Promise<NewsItem[]> {
    const allNews = Array.from(this.newsItems.values())
      .filter(item => item.isPublished)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    
    return limit ? allNews.slice(0, limit) : allNews;
  }

  async getEvents(upcoming: boolean = true): Promise<Event[]> {
    const now = new Date();
    return Array.from(this.events.values())
      .filter(event => upcoming ? event.eventDate >= now : true)
      .sort((a, b) => a.eventDate.getTime() - b.eventDate.getTime());
  }
}

export const storage = new MemStorage();
