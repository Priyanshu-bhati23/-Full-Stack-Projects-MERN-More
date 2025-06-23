"use client"

import Nav from '@/app/components/nav'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import * as React from 'react'
import { createBlog } from './actions'
import { useOrganization } from '@clerk/nextjs'
export default  function OrgLandingPage(){

    const[blogContent,setBlogContent]=React.useState('')
    const[blogTitle,setBlogTitle]=React.useState('')
 
    const selectedOrg=useOrganization();
    console.log({selectedOrg})

    const handleCreateBlog = async () =>{
        if(!selectedOrg.organization?.id)return 
        await createBlog({
            body:blogContent.trim(),
            orgId:selectedOrg.organization?.id,
            title:blogTitle.trim(),

        })
    }



        return (
        <main>
            <Nav/>
            <div className=' p-10 '>
                <Input value={blogTitle} onChange={e=>{
                    setBlogTitle(e.target.value)
                }}   placeholder='Title'/>
                <Textarea className='mt-2' placeholder='Enter your Blog Content' value ={blogContent} onChange={(e)=>{
                    setBlogContent(e.target.value)
                }}/>
                <Button onClick={handleCreateBlog} className='mt-2'>Create Blog </Button>
            </div>
        </main>
    )
}