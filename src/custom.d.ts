declare module "*.svg" {
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