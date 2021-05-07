// import Head from 'next/head';
import MyHeader from './myheader';
import "../public/test.css";
import {Button} from 'antd';

function Header(){
    return (
        <>
            {/* <Head>
                <title>技术胖是最棒的</title>
                <meta charSet="utf-8" />
            </Head> */}
            <MyHeader />
            <div>JSPang.com</div>
            <div><Button>我是按钮</Button></div>
        </>
        
    )
}

export default Header;