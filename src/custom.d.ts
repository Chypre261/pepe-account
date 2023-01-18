declare module '*.svg' {
  const content: any;
  export default content;
}

type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createdAt?: Date // 类 or 构造函数
}

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated'; // 'success' or 'duplicated'
  update: (name: string, id: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void;
}

interface Window {
  tagList: Tag[];
  findTag: (id: string) => Tag | undefined ;
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
}