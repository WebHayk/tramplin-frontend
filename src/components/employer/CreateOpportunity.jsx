import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const CreateOpportunity = () => {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-bold">Новая публикация</h3>
                <p className="text-sm text-muted-foreground">Заполните детали вакансии, стажировки или мероприятия</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="grid gap-2">
                        <Label>Заголовок (Название позиции)</Label>
                        <Input placeholder="Напр: Middle React Developer" />
                    </div>

                    <div className="grid gap-2">
                        <Label>Тип возможности</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Выберите тип" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="job">Вакансия</SelectItem>
                                <SelectItem value="intern">Стажировка</SelectItem>
                                <SelectItem value="event">Мероприятие</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label>Формат</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Офис / Удаленно / Гибрид" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="remote">Удаленно</SelectItem>
                                <SelectItem value="office">Офис</SelectItem>
                                <SelectItem value="hybrid">Гибрид</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="grid gap-2">
                        <Label>Зарплатная вилка / Бюджет</Label>
                        <Input placeholder="Напр: 200 000 - 300 000 ₽" />
                    </div>

                    <div className="grid gap-2">
                        <Label>Локация (Город)</Label>
                        <Input placeholder="Ереван, Таллин..." />
                    </div>

                    <div className="grid gap-2">
                        <Label>Теги (через запятую)</Label>
                        <Input placeholder="React, Node.js, V8" />
                    </div>
                </div>
            </div>

            <div className="grid gap-2">
                <Label>Полное описание</Label>
                <Textarea
                    placeholder="Подробно опишите требования и задачи..."
                    className="min-h-[200px]"
                />
            </div>

            <div className="flex gap-4 border-t pt-6">
                <Button className="px-10">Опубликовать</Button>
                <Button variant="outline">Сохранить как черновик</Button>
            </div>
        </div>
    );
};

export default CreateOpportunity;