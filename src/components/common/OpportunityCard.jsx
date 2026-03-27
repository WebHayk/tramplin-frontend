import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Calendar,
    MapPin,
    Briefcase,
    Star,
    Globe,
    Mail,
    ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const OpportunityCard = ({ data, isFavorite }) => {
    return (
        <Card className={`group flex flex-col hover:shadow-md transition-all`}>
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider">
                        {data.type}
                    </Badge>
                    {isFavorite && <Star className="h-4 w-4 fill-orange-500 text-orange-500" />}
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors cursor-pointer mt-2 leading-snug">
                    {data.title}
                </CardTitle>
                <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm font-semibold text-muted-foreground">{data.companyName}</p>
                </div>
            </CardHeader>

            <CardContent className="space-y-4 flex-1">
                {/* Краткое описание */}
                <p className="text-sm text-muted-foreground line-clamp-2 italic">
                    {data.description || "Описание позиции пока не добавлено работодателем..."}
                </p>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0" /> {data.location} • {data.format}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <Briefcase className="h-4 w-4 shrink-0 text-primary" /> {data.salary}
                    </div>
                </div>

                <Separator className="opacity-50" />

                {/* Контакты работодателя */}
                <div className="space-y-1.5">
                    <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Контакты</p>
                    <div className="flex flex-wrap gap-3">
                        {data.contacts?.email && (
                            <a href={`mailto:${data.contacts.email}`} className="flex items-center gap-1.5 text-xs text-primary hover:underline">
                                <Mail className="h-3 w-3" /> Email
                            </a>
                        )}
                        {data.contacts?.website && (
                            <a href={data.contacts.website} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-primary hover:underline">
                                <Globe className="h-3 w-3" /> Сайт
                            </a>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                    {data.tags?.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px] py-0 px-2 bg-muted/50 font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="pt-2 border-t flex justify-between items-center bg-muted/5">
        <span className="text-[10px] text-muted-foreground flex items-center gap-1">
          <Calendar className="h-3 w-3" /> {data.date}
        </span>
                <Button size="sm" className="h-8 text-xs gap-1.5">
                    Подробнее <ExternalLink className="h-3.5 w-3.5" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default OpportunityCard;