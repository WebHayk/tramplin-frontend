import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const AuthPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Имитация логики: если email содержит 'admin', идем к куратору
        if (formData.email.includes('admin')) navigate('/admin');
        else if (formData.email.includes('hr')) navigate('/employer');
        else navigate('/dashboard');
    };

    return (
        <div className="flex-1 flex items-center justify-center p-6 bg-muted/30">
            <Card className="w-full max-w-[400px] shadow-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Вход в систему</CardTitle>
                    <CardDescription>Введите email и пароль для входа</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Электронная почта</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                required
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Пароль</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                        </div>
                        <Button type="submit" className="w-full">Войти</Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 border-t pt-4">
                    <p className="text-sm text-muted-foreground">
                        Нет аккаунта? <Link to="/register" className="text-primary font-bold hover:underline">Зарегистрироваться</Link>
                    </p>
                    <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">Вернуться на главную</Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AuthPage;