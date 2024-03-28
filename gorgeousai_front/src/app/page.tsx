import RootLayout from './layout';

import 'highlight.js/styles/github-dark.css';
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';
import { useState } from 'react';
import { text } from 'stream/consumers';

export default function HomePage() {

    // const [input, setIput] = useState("");
    // const [message, setMessages] = useState([
    //     {
    //         text: "Hi, I'm chatgpt",
    //         isBot: true,
    //     }
    // ]);

    // function highlightCodeBlocks(text: string) {
    //     const marked = new Marked(
    //         markedHighlight({
    //         langPrefix: 'hljs language-',
    //         highlight(code) {
    //             return hljs.highlightAuto(code).value;
    //         }
    //         })
    //     );
    //     if (text === undefined || text === null) {
    //         console.error("输入文本为空或未定义");
    //         return;
    //     }
    //     return marked.parse(text)
    // }


    return (
        <RootLayout>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">打开侧边栏</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="http://gorgeousai.cn" className="flex ms-2 md:me-24">
                                <img src="/GAILogo.svg" className="h-6 me-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </RootLayout>
        /* <div className='app'>
            <div className='siderbar'>
                <div className='upperside'>
                    
                </div>
                <div className='lowerside'>

                </div>
            </div>
            <div className='main'>
                <div className="min-h-[calc(100vh-14rem)] flex flex-col items-center mx-[6rem] mb-[2rem]">
                    <div className="overflow-hidden overflow-y-scroll scroll-smooth w-full max-w-[70rem] h-[calc(100vh-15rem)]">
                        {message.map((messgae, i) => (
                            <div key={i} className={messgae.isBot?"chat bot":"chat"}>
                                <p className="font-serif " dangerouslySetInnerHTML={{ __html: highlightCodeBlocks(message.text)}}></p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='chatFooter'>

                </div>
            </div>
        </div> */
        
    )
}
