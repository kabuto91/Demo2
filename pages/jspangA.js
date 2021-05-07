import Link from 'next/link';

export default ()=>(
    <>
        <div>JSPang -a page</div>
        <Link href='/'>
            <a>
                <span>返回首页</span>
                <span>首页</span>
            </a>
        </Link>
    </>
)