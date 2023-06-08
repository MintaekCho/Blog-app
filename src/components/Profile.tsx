import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Profile() {
    return (
        <article className='flex flex-col items-center justify-center gap-2'>
            <Image className='rounded-full' src={'/images/profile/profile.jpeg'} alt={'profile'} width={250} height={250} priority/>
            <h2 className='text-3xl font-bold'>{"Hi, I'm Mintaek"}</h2>
            <p className='text-xl font-semibold'>Front-end Engineer</p>
            <p>트러블슈팅을 좋아하는 개발자입니다.</p>
            <Link className='py-2 px-4 bg-yellow-500 hover:text-white rounded-2xl text-xl font-bold hover:scale-105 ease-in-out duration-300' href={'/contact'}>Contact Me</Link>
        </article>
    );
}

