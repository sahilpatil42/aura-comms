import { ChannelCategory, Scenario } from './scenario';

export interface MarketingFeedItem {
  id: string;
  source: 'Google Ads Announcements' | 'Meta for Developers' | 'Search Engine Land' | 'Retail Media Digest';
  sourceUrl: string;
  title: string;
  summary: string;
  publishedAt: string;
  category: ChannelCategory;
  impactLevel: 'Critical' | 'High' | 'Medium';
  tags: string[];
  derivedCrisisConcept?: string;
  generatedScenario?: Partial<Scenario>;
}

export interface SyncFeedResponse {
  success: boolean;
  timestamp: string;
  totalIngested: number;
  newScenariosCount: number;
  feedItems: MarketingFeedItem[];
  message: string;
}
