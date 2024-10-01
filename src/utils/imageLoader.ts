// utils/imageLoader.ts
export const imageLoader = ({ src }: { src: string }) => {
    return `${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}${src}`
  }