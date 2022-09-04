import connection from './../connection';

export default async (id:number, name:string, nickname:string, email:string): Promise<any> => {
  await connection("Users")
  .update({
    name,
    nickname,
    email
  })
  .where({
    id,
  })
};