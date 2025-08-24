import { SelectNews, SelectProject, SelectTeam, InsertNews, InsertProject, InsertTeam } from '../shared/schema';

export interface IStorage {
  // News operations
  getNews(): Promise<SelectNews[]>;
  getNewsById(id: number): Promise<SelectNews | null>;
  createNews(news: InsertNews): Promise<SelectNews>;
  
  // Project operations
  getProjects(): Promise<SelectProject[]>;
  getProjectById(id: number): Promise<SelectProject | null>;
  createProject(project: InsertProject): Promise<SelectProject>;
  
  // Team operations
  getTeam(): Promise<SelectTeam[]>;
  getTeamById(id: number): Promise<SelectTeam | null>;
  createTeamMember(member: InsertTeam): Promise<SelectTeam>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private news: SelectNews[] = [
    {
      id: 1,
      title: "Definitive approval of CAPA as UNIZAR Research Institute",
      excerpt: "The Governing Council of the University of Zaragoza has definitively approved the creation of the Center for Astroparticles and High Energies (CAPA).",
      content: "The Governing Council of the University of Zaragoza has definitively approved the creation of the Center for Astroparticles and High Energies (CAPA), as well as its internal regulations. The fundamental objective of the University Research Institute Center for Astroparticles and High Energy Physics is to promote research in the fields of high-energy physics, nuclear and particle physics.",
      createdAt: new Date('2024-01-15'),
    },
    {
      id: 2,
      title: "Dark Quantum in the Tercer Milenio science supplement",
      excerpt: "The DarkQuantum project, coordinated from CAPA, was recently featured in the Tercer Milenio science section.",
      content: "The DarkQuantum project, coordinated from the Center for Astroparticles and High Energy Physics (CAPA) at the University of Zaragoza, was recently featured in the Tercer Milenio science section of the newspaper Heraldo de Aragón. The article highlights the project's innovative approach, combining quantum technologies and particle physics.",
      createdAt: new Date('2024-01-10'),
    },
  ];

  private projects: SelectProject[] = [
    {
      id: 1,
      title: "DarkQuantum Project",
      description: "Combining quantum technologies and particle physics to tackle one of the greatest mysteries of the universe",
      category: "Dark Matter Research",
      status: "active",
    },
    {
      id: 2,
      title: "Ultra-high-energy cosmic messengers",
      description: "Research on the origins of the most energetic particles in the Universe",
      category: "Cosmic Ray Physics",
      status: "active",
    },
  ];

  private teamMembers: SelectTeam[] = [
    {
      id: 1,
      name: "Prof. Jacobo Asorey Barreiro",
      position: "Principal Investigator",
      description: "Leading researcher in astroparticle physics and cosmology",
      email: "jacobo.asorey@unizar.es",
    },
    {
      id: 2,
      name: "Rafael Alves Batista",
      position: "Visiting Professor",
      description: "Expert in ultra-high-energy cosmic ray physics",
      email: null,
    },
  ];

  // News methods
  async getNews(): Promise<SelectNews[]> {
    return [...this.news].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getNewsById(id: number): Promise<SelectNews | null> {
    return this.news.find(n => n.id === id) || null;
  }

  async createNews(news: InsertNews): Promise<SelectNews> {
    const newNews: SelectNews = {
      id: Math.max(...this.news.map(n => n.id)) + 1,
      createdAt: new Date(),
      ...news,
    };
    this.news.push(newNews);
    return newNews;
  }

  // Project methods
  async getProjects(): Promise<SelectProject[]> {
    return [...this.projects];
  }

  async getProjectById(id: number): Promise<SelectProject | null> {
    return this.projects.find(p => p.id === id) || null;
  }

  async createProject(project: InsertProject): Promise<SelectProject> {
    const newProject: SelectProject = {
      id: Math.max(...this.projects.map(p => p.id)) + 1,
      ...project,
    };
    this.projects.push(newProject);
    return newProject;
  }

  // Team methods
  async getTeam(): Promise<SelectTeam[]> {
    return [...this.teamMembers];
  }

  async getTeamById(id: number): Promise<SelectTeam | null> {
    return this.teamMembers.find(t => t.id === id) || null;
  }

  async createTeamMember(member: InsertTeam): Promise<SelectTeam> {
    const newMember: SelectTeam = {
      id: Math.max(...this.teamMembers.map(t => t.id)) + 1,
      ...member,
    };
    this.teamMembers.push(newMember);
    return newMember;
  }
}

export const storage = new MemStorage();