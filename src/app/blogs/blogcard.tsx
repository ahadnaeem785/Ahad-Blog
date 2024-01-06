import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const getBlogs = async () => {
    const res = await fetch(
        "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=70"
    );
    if (!res.ok) {
        throw new Error("Could not retrieve blog posts");
    }
    return await res.json();
};


export default async function Blogcard() {
    const blogs = await getBlogs();
    console.log(blogs)
    return (
        <div className="p-10 ">
            {blogs.blogs.length > 0 ? (
                <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 py-4 px-5 gap-4">
                    {blogs.blogs.map((post: any) => (
                        <Link href={`/blogs/${post.id}`} key={post.id}>
                            {/* <div className="border p-1">
                  <div className="text-xl font-bold">{post.title}</div>
                  <p>{post.description}</p>
                </div> */}
                            <div className="card w-auto  shadow-xl bg-gray-100">
                                <div className=" pt-8 mx-auto">
                                    {/* image */}
                                    <Image src={post.photo_url} alt="image" className="rounded-xl " width={200} height={200} />
                                </div>
                                <div className="card-body items-center text-center -mt-2">
                                    <h2 className="line-clamp-1 card-title text-myBlackHead scroll-m-20 pb-1 text-xl font-bold tracking-tight first:mt-0">{post.title}</h2>
                                    <p className='line-clamp-1 text-myBlackHead scroll-m-20 text-base font-medium tracking-tight'>{post.description}</p>
                                    <div className="mt-3 -mb-2 flex justify-end">
                                        <Button className='bg-myBlackHead hover:bg-myBlackPara text-mywhite leading-7 scroll-m-20 text-sm font-medium tracking-tight '>View All</Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div>No Blog Found</div>
            )}
        </div>

    )
}


