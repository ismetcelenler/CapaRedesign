import express from 'express';
import { storage } from './storage';
import { insertNewsSchema, insertProjectSchema, insertTeamSchema } from '../shared/schema';

const router = express.Router();

// News routes
router.get('/api/news', async (req, res) => {
  try {
    const news = await storage.getNews();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

router.get('/api/news/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const news = await storage.getNewsById(id);
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

router.post('/api/news', async (req, res) => {
  try {
    const result = insertNewsSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: 'Invalid data', details: result.error });
    }
    const news = await storage.createNews(result.data);
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create news' });
  }
});

// Projects routes
router.get('/api/projects', async (req, res) => {
  try {
    const projects = await storage.getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

router.get('/api/projects/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const project = await storage.getProjectById(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

// Team routes
router.get('/api/team', async (req, res) => {
  try {
    const team = await storage.getTeam();
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team' });
  }
});

export default router;