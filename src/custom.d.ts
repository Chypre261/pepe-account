declare module '*.svg' {
  const content: any;
  export default content;
}

type RootState = {
  recordList: RecordItem[],
  createRecordError: Error | null,
  createTagError: Error | null,
  tagList: Tag[],
  currentTag?: Tag
}

type RecordItem = {
  tags: Tag[],
  notes: string,
  type: string,
  amount: number,
  createdAt?: string
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
}