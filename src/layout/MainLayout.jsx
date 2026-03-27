import React from 'react';
import {Outlet, Link, useNavigate} from 'react-router-dom';
import {Button} from "@/components/ui/button";
import {BriefcaseBusiness, Bell} from "lucide-react";

const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
            {/* HEADER */}
            <header
                className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <BriefcaseBusiness className="h-6 w-6 text-primary-foreground"/>
                            </div>
                            <span className="inline-block font-bold text-xl tracking-tighter">
                ТРАМПЛИН
              </span>
                        </Link>

                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" onClick={() => navigate('/auth')}>Войти</Button>
                            <Button onClick={() => navigate('/register')}>Создать аккаунт</Button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col">
                <Outlet/>
            </main>

            {/* FOOTER - опционально, но для олимпиады плюс в карму */}
            <footer className="container mx-auto border-t py-6">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © Платформа профессионального развития «Трамплин».
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;