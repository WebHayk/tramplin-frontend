import React from 'react';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const stacks = ["JavaScript", "React", "Python", "SQL", "Java", "Design", "DevOps"];
const types = ["Стажировка", "Вакансия", "Менторство", "Мероприятие"];

const FilterContent = ({ filters, onFilterChange }) => {

    const handleTypeChange = (type) => {
        const currentTypes = filters?.types || [];
        const newTypes = currentTypes.includes(type)
            ? currentTypes.filter(t => t !== type)
            : [...currentTypes, type];
        onFilterChange({ ...filters, types: newTypes });
    };

    return (
        <div className="space-y-6 py-4">
            {/* Тип занятости */}
            <div className="space-y-4">
                <h4 className="font-medium leading-none text-sm text-muted-foreground uppercase tracking-wider">Тип возможности</h4>
                <div className="grid gap-3">
                    {types.map((type) => (
                        <div key={type} className="flex items-center space-x-3">
                            <Checkbox
                                id={type}
                                checked={filters?.types?.includes(type)}
                                onCheckedChange={() => handleTypeChange(type)}
                            />
                            <Label htmlFor={type} className="text-sm font-medium leading-none cursor-pointer">
                                {type}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Стек технологий */}
            <div className="space-y-4">
                <h4 className="font-medium leading-none text-sm text-muted-foreground uppercase tracking-wider">Технологии</h4>
                <div className="flex flex-wrap gap-2">
                    {stacks.map((s) => (
                        <Badge
                            key={s}
                            variant={filters?.stack?.includes(s) ? "default" : "outline"}
                            className="cursor-pointer transition-colors"
                            onClick={() => {
                                const currentStack = filters?.stack || [];
                                const newStack = currentStack.includes(s)
                                    ? currentStack.filter(item => item !== s)
                                    : [...currentStack, s];
                                onFilterChange({ ...filters, stack: newStack });
                            }}
                        >
                            {s}
                        </Badge>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Зарплата */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h4 className="font-medium leading-none text-sm text-muted-foreground uppercase tracking-wider">Зарплата (от)</h4>
                    <span className="text-sm font-bold text-primary">{filters?.minSalary || 0} ₽</span>
                </div>
                <Slider
                    defaultValue={[filters?.minSalary || 0]}
                    max={500000}
                    step={10000}
                    onValueChange={(val) => onFilterChange({ ...filters, minSalary: val[0] })}
                    className="py-4"
                />
            </div>
        </div>
    );
};

export default FilterContent;