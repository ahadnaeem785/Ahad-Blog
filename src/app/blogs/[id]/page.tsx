import React from 'react'

// const getBlogsInfo = async () => {
//     const res = await fetch(
//         "https://api.slingacademy.com/v1/sample-data/blog-posts/[id]"
//     );
//     if (!res.ok) {
//         throw new Error("Could not retrieve blog posts");
//     }
//     return await res.json();
// };


export default async function Page({ params }: { params: { id: any } }) {

    const blogInfo = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${params.id}`);
    const data = await blogInfo.json()
    console.log("Data",data)
    // console.log(params)
    return (
        <div className='bg-gray-100 '>
            {data && (
                <div key={data.id} >
                    <h1 className='text-center scroll-m-20 pt-5 text-3xl font-extrabold underline underline-offset-1 text-myBlackHead tracking-tight lg:text-4xl'>Title: &nbsp;{data.blog.title}</h1>
                    <div className='mt-8 p-10 overflow-hidden'>
                        <h1 className='scroll-m-20 text-xl font-semibold tracking-tight text-myBlackHead'>Desription: &nbsp;{data.blog.description}</h1>
                        <h1 className='scroll-m-20 text-xl font-semibold tracking-tight text-myBlackHead'>Category:  &nbsp;{data.blog.category}</h1>
                        <h1 className='scroll-m-20 text-xl font-semibold tracking-tight text-myBlackHead'>Content:<span className=' -ml-2 mt-2 border-l-2 pl-6 italic text-lg font-medium'>{data.blog.content_text}</span></h1>
                        <h1 className='scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead'>Category:  &nbsp;{data.blog.user_id}</h1>
                    </div>
                    
                </div>


            )}
        </div>
    )
}
