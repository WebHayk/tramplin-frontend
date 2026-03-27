import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Briefcase,
    User,
    ShieldCheck,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Info
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("candidate");
    const [step, setStep] = useState(1); // 1 - Основное, 2 - Верификация (только для работодателя)

    // Состояние формы
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        companyName: "",
        password: "",
        inn: "",
        companyLink: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "inn" && value !== "" && !/^\d+$/.test(value)) return;
        setFormData({ ...formData, [name]: value });
    };

    const nextStep = () => setStep(2);
    const prevStep = () => setStep(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Финальные данные:", { role, ...formData });
        // Симуляция редиректа после успеха
        navigate(role === 'employer' ? '/employer' : '/dashboard');
    };

    return (
        <div className="flex-1 flex items-center justify-center p-6 bg-muted/30 min-h-[calc(100vh-64px)]">
            <Card className="w-full max-w-[500px] shadow-2xl transition-all duration-300">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-2">
                        <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-primary text-primary-foreground' : 'bg-green-500 text-white'}`}>
                                {step > 1 ? <CheckCircle2 className="h-5 w-5" /> : "1"}
                            </div>
                            {role === 'employer' && (
                                <>
                                    <div className="w-10 h-[2px] bg-muted" />
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                        2
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">
                        {step === 1 ? "Регистрация" : "Верификация компании"}
                    </CardTitle>
                    <CardDescription>
                        {step === 1 ? "Заполните основные данные аккаунта" : "Подтвердите статус вашей организации"}
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {step === 1 && (
                            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                                {/* Выбор роли доступен только на 1 шаге */}
                                <Tabs value={role} onValueChange={(v) => { setRole(v); setStep(1); }} className="w-full">
                                    <TabsList className="grid w-full grid-cols-2 h-16 bg-muted/50 p-1">
                                        <TabsTrigger value="candidate" className="gap-2">
                                            <User className="h-4 w-4" /> Соискатель
                                        </TabsTrigger>
                                        <TabsTrigger value="employer" className="gap-2">
                                            <Briefcase className="h-4 w-4" /> Работодатель
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>

                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" name="email" type="email" placeholder="mail@example.com" required value={formData.email} onChange={handleInputChange} />
                                    </div>

                                    {role === 'candidate' ? (
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="firstName">Имя</Label>
                                                <Input id="firstName" name="firstName" placeholder="Иван" required value={formData.firstName} onChange={handleInputChange} />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="lastName">Фамилия</Label>
                                                <Input id="lastName" name="lastName" placeholder="Иванов" required value={formData.lastName} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="grid gap-2">
                                            <Label htmlFor="companyName">Название компании</Label>
                                            <Input id="companyName" name="companyName" placeholder="ООО КодИнсайт" required value={formData.companyName} onChange={handleInputChange} />
                                        </div>
                                    )}

                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Пароль</Label>
                                        <Input id="password" name="password" type="password" required value={formData.password} onChange={handleInputChange} />
                                    </div>
                                </div>

                                {role === 'employer' ? (
                                    <Button type="button" className="w-full gap-2" onClick={nextStep}>
                                        Далее к верификации <ArrowRight className="h-4 w-4" />
                                    </Button>
                                ) : (
                                    <Button type="submit" className="w-full">Завершить регистрацию</Button>
                                )}
                            </div>
                        )}

                        {step === 2 && role === 'employer' && (
                            <div className="space-y-5 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="inn" className="flex items-center justify-between">
                                            ИНН организации
                                            <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded uppercase">RU Только цифры</span>
                                        </Label>
                                        <Input
                                            id="inn"
                                            name="inn"
                                            placeholder="Напр. 7701234567"
                                            maxLength={12}
                                            required
                                            value={formData.inn}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="companyLink">Профессиональная сеть / Сайт</Label>
                                        <Input
                                            id="companyLink"
                                            name="companyLink"
                                            placeholder="https://clinkedin.com/company/..."
                                            value={formData.companyLink}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <Alert className="bg-primary/5 border-primary/20">
                                        <ShieldCheck className="h-4 w-4 text-primary" />
                                        <AlertDescription className="text-xs">
                                            После регистрации ваш статус будет "На проверке". Кураторы верифицируют компанию в течение 24 часов.
                                        </AlertDescription>
                                    </Alert>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <Button type="button" variant="outline" className="flex-1 gap-2" onClick={prevStep}>
                                        <ArrowLeft className="h-4 w-4" /> Назад
                                    </Button>
                                    <Button type="submit" className="flex-[2] bg-green-600 hover:bg-green-700">
                                        Отправить на проверку
                                    </Button>
                                </div>
                            </div>
                        )}
                    </form>
                </CardContent>

                <CardFooter className="flex justify-center border-t py-4 bg-muted/10">
                    <p className="text-sm text-muted-foreground">
                        Уже есть аккаунт?{" "}
                        <Link to="/auth" className="text-primary font-bold hover:underline">Войти</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default RegisterPage;