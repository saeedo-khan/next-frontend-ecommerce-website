export interface Photos {
    data: PhotosData;
    meta: Meta;
}

export interface PhotosData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    categories:    string;
    products:    Products;
}

export interface Products {
    data: Datum;
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    title:       string;
    description: string;
    price:       number;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    slug:        string;
    image:       Image;
    quantity: number;
}

export interface Image {
    data: ImageData;
}

export interface ImageData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    Jpg = ".jpg",
}

export interface Formats {
    thumbnail: Large;
    large:     Large;
    medium:    Large;
    small:     Large;
}

export interface Large {
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

export interface Meta {
}
