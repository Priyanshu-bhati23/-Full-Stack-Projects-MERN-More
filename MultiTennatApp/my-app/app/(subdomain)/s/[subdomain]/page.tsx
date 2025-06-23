
import { blogTable } from '@/db/schema'
import {clerkClient} from '@clerk/nextjs/server'
import {db} from '@/db'
import {eq} from 'drizzle-orm'



interface Params{
    subdomain:string
}


export default async function HomePage({params}:{params:Promise<Params>}){
    const {subdomain} = await params

    const client =await clerkClient()

    const org=await client.organizations.getOrganization({slug:subdomain})

    const orgID=org.id
    const blogs=await db.select().from(blogTable).where(eq(
        blogTable.orgId,
        orgID
    ))

    return <div>
        {blogs.map(blog=><div>
            <h3 className='text-2xl font-bold'>{blog.title}</h3>
            <p>{blog.body}</p>
            </div>)}
    </div>
}