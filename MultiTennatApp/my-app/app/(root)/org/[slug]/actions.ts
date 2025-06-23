'use server';

import { blogTable, createBlogType } from "@/db/schema";
import { drizzle } from 'drizzle-orm/node-postgres';

 const db = drizzle(process.env.DATABASE_URL!);


export const createBlog=async (payload:createBlogType)=>{
    const [result]=await db.insert(blogTable).values(payload).returning({
        id:blogTable.id,
    });
    return result.id

}