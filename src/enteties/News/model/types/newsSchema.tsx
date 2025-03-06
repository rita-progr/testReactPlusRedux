interface MediaItem {
    url: string;
}

export interface NewsItem {
    id: string;
    abstract: string;
    multimedia: MediaItem[];
    web_url: string;
    pub_date: string;
    source: string;
    rawDate: number;
}

export interface NewsSchema {
    news: Record<string, NewsItem[]>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    currentMonth?:number|null;
    currentYear?:number|null;
}