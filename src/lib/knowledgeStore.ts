// ============================================================================
// AURA-COMMS KNOWLEDGE STORE & LOCAL STORAGE MANAGER
// Loads, caches, indexes, and synchronizes digital marketing playbooks offline
// ============================================================================

import { 
  PlatformBattlecard, 
  MarketingBookSummary, 
  StoredKnowledgePayload,
  AdPlatformType 
} from '@/types/knowledge';
import { ALL_PLATFORM_BATTLECARDS, ALL_MARKETING_BOOKS } from '@/data/marketingPlaybooksData';
import { CORE_MARKETING_METRICS, GITHUB_KNOWLEDGE_ARTICLES } from '@/data/githubMarketingKnowledgeBase';
import { ALL_170_SCENARIOS } from '@/data/marketingScenariosCatalog';

const STORAGE_KEY = 'AURA_KNOWLEDGE_BASE_V2';
const CURRENT_VERSION = '2.4.0';

export class KnowledgeStore {
  private static cachedPayload: StoredKnowledgePayload | null = null;

  /**
   * Initializes and ensures the knowledge base is indexed in browser localStorage.
   * Can be called on app startup or inside knowledge modals.
   */
  public static init(): StoredKnowledgePayload {
    if (typeof window === 'undefined') {
      return this.getFreshDefaultPayload();
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as StoredKnowledgePayload;
        // Verify version matches current codebase
        if (parsed.version === CURRENT_VERSION && parsed.platforms && parsed.platforms.length > 0) {
          this.cachedPayload = parsed;
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read existing knowledge base from localStorage:', e);
    }

    // Generate fresh payload and persist to localStorage
    const freshPayload = this.getFreshDefaultPayload();
    this.saveToStorage(freshPayload);
    this.cachedPayload = freshPayload;
    return freshPayload;
  }

  /**
   * Saves payload cleanly into browser localStorage
   */
  public static saveToStorage(payload: StoredKnowledgePayload): boolean {
    if (typeof window === 'undefined') return false;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      this.cachedPayload = payload;
      return true;
    } catch (err) {
      console.error('Failed to save knowledge payload to localStorage:', err);
      return false;
    }
  }

  /**
   * Builds fresh default payload combining all open-world platforms, books, and metrics
   */
  public static getFreshDefaultPayload(): StoredKnowledgePayload {
    return {
      version: CURRENT_VERSION,
      lastUpdated: new Date().toISOString(),
      platformCount: ALL_PLATFORM_BATTLECARDS.length,
      bookCount: ALL_MARKETING_BOOKS.length,
      metricCount: CORE_MARKETING_METRICS.length,
      platforms: ALL_PLATFORM_BATTLECARDS,
      books: ALL_MARKETING_BOOKS,
    };
  }

  /**
   * Retrieve all platform battlecards (Meta, Google, LinkedIn, Snapchat, GPT Ads, TikTok, Amazon, etc.)
   */
  public static getPlatforms(): PlatformBattlecard[] {
    if (!this.cachedPayload) {
      this.init();
    }
    return this.cachedPayload?.platforms || ALL_PLATFORM_BATTLECARDS;
  }

  /**
   * Retrieve specific battlecard by platform ID
   */
  public static getPlatformById(id: AdPlatformType | string): PlatformBattlecard | undefined {
    const list = this.getPlatforms();
    return list.find((p) => p.platformId === id || p.id === id);
  }

  /**
   * Retrieve all curated marketing book playbooks
   */
  public static getBooks(): MarketingBookSummary[] {
    if (!this.cachedPayload) {
      this.init();
    }
    return this.cachedPayload?.books || ALL_MARKETING_BOOKS;
  }

  /**
   * Full-text search across platforms, books, crisis scripts, and metrics
   */
  public static search(query: string): {
    platforms: PlatformBattlecard[];
    books: MarketingBookSummary[];
    metrics: typeof CORE_MARKETING_METRICS;
    articles: typeof GITHUB_KNOWLEDGE_ARTICLES;
  } {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        platforms: this.getPlatforms(),
        books: this.getBooks(),
        metrics: CORE_MARKETING_METRICS,
        articles: GITHUB_KNOWLEDGE_ARTICLES,
      };
    }

    const platforms = this.getPlatforms().filter((p) => 
      p.platformName.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.algorithmicCore.toLowerCase().includes(q) ||
      p.keyFormats.some((f) => f.toLowerCase().includes(q)) ||
      p.benchmarks.some((b) => b.metric.toLowerCase().includes(q) || b.notes.toLowerCase().includes(q)) ||
      p.crisisPlaybooks.some((c) => c.situation.toLowerCase().includes(q) || c.boardroomBlufScript.toLowerCase().includes(q))
    );

    const books = this.getBooks().filter((b) => 
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.coreThesis.toLowerCase().includes(q) ||
      b.agencyApplication.toLowerCase().includes(q) ||
      b.executiveKeyTakeaways.some((t) => t.toLowerCase().includes(q)) ||
      b.boardroomScripts.some((s) => s.scenario.toLowerCase().includes(q) || s.script.toLowerCase().includes(q))
    );

    const metrics = CORE_MARKETING_METRICS.filter((m) => 
      m.name.toLowerCase().includes(q) ||
      m.acronym.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.healthyBenchmark.toLowerCase().includes(q)
    );

    const articles = GITHUB_KNOWLEDGE_ARTICLES.filter((a) => 
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.clientExplanationScript.toLowerCase().includes(q)
    );

    return { platforms, books, metrics, articles };
  }

  /**
   * Metadata stats for UI display
   */
  public static getStats(): {
    isCachedLocally: boolean;
    storageKey: string;
    version: string;
    totalPlatforms: number;
    totalBooks: number;
    totalFormulas: number;
    totalFieldScripts: number;
    totalScenarios: number;
  } {
    const isCached = typeof window !== 'undefined' && Boolean(localStorage.getItem(STORAGE_KEY));
    return {
      isCachedLocally: isCached,
      storageKey: STORAGE_KEY,
      version: CURRENT_VERSION,
      totalPlatforms: ALL_PLATFORM_BATTLECARDS.length,
      totalBooks: ALL_MARKETING_BOOKS.length,
      totalFormulas: CORE_MARKETING_METRICS.length,
      totalFieldScripts: GITHUB_KNOWLEDGE_ARTICLES.length,
      totalScenarios: ALL_170_SCENARIOS.length,
    };
  }
}
