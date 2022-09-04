import { Console } from 'console';
import connection from './../connection';

// export default async (title:string, description:string, limitDate:Date, creatorUserId:string): Promise<any> => {
export default async (title:string, description:string, limitDate:string, creatorUserId:string): Promise<any> => {
  console.log('data 2:', limitDate);
  await connection("Tasks")
    .insert({
      taskId: new Date().getTime(),
      title,
      description,
      limitDate,
      status: "to_do",
      creatorUserId
    })
};