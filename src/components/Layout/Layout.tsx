import "./Layout.scss";
import BottomButton from "@/src/components/BottomButton/BottomButton";

export default function Layout({children}:any) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex invisible">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Get started by editing&nbsp;
                    <code className="font-mono font-bold">src/app/page.tsx</code>
                </p>
            </div>
            {children}
            <div className="buttons-grid">
                <BottomButton title="Резюме" description="Посмотрите или скачайте резюме в формате PDF" endpoint='summary'/>
                <BottomButton title="Github" description="Ознакомьтесь с моим профилем на github"/>
                <BottomButton title="Навыки" description="Узнайте, какими навыками я владею"/>
                <BottomButton title="FAQ" description="Узнайте ответы на часто задаваемые вопросы"/>
            </div>
        </main>
    );
}