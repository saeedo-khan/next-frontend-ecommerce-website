export type Photos = {
    data: {
        id: number;
        attributes: {
            createdAt: Date;
            updatedAt: Date;
            publishedAt: Date;
            category: string;
            products: {
                data: {
                    id: number;
                    attributes: {
                        title:  string;
                        description: string;
                        price: number;
                        createdAt: Date;
                        updatedAt: Date;
                        publishedAt: Date;
                        slug:  string;
                        image: {
                            data: {
                                id:number;
                                attributes: {
                                    name: string;
                                    alternativeText: string;
                                    caption: string;
                                    width: number;
                                    height: number;
                                    formats: Formats;
                                    hash:string;
                                    ext: EXT;
                                    mime:   MIME;
                                    size:  number;
                                    url:   string;
                                    previewUrl: null;
                                    provider:  string;
                                    provider_metadata: null;
                                    createdAt: Date;
                                    updatedAt:  Date;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    meta: {}
}

export enum EXT {
    Jpg = ".jpg",
}

export type Formats = {
    thumbnail: Large;
    large:     Large;
    medium:    Large;
    small:     Large;
}

export type Large =  {
    name:   string;
    hash:   string;
    ext:    EXT;
    mime:   MIME;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}
export enum MIME {
    ImageJPEG = "image/jpeg",
}