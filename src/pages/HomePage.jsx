import React, {useState, useMemo} from 'react';
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Search, Map as MapIcon, List, SlidersHorizontal} from "lucide-react";
import OpportunityCard from "@/components/common/OpportunityCard.jsx";
import MapView from "@/components/home/MapView";
import FilterContent from "@/components/home/FilterContent";

const opportunities = [
    {
        id: 1,
        title: "Senior Frontend Engineer",
        companyName: "КодИнсайт",
        description: "Разработка архитектуры высоконагруженных образовательных платформ на React и Vite v4.",
        type: "Вакансия",
        format: "Удаленно",
        location: "Таллин",
        salary: "300 000 ₽",
        tags: ["React", "V8", "Tailwind"],
        isFavorite: true,
        coords: [40.1872, 44.5135],
        date: "Сегодня",
        contacts: {
            email: "hr@codeinsight.ee",
            website: "https://codeinsight.ee"
        }
    },
    {
        id: 2,
        title: "Junior Backend Developer",
        companyName: "TechSphere",
        description: "Стажировка в отделе Core Services. Работа с Node.js и оптимизация SQL запросов.",
        type: "Стажировка",
        format: "Офис",
        location: "Ереван",
        salary: "200 000 ֏",
        tags: ["Node.js", "PostgreSQL"],
        isFavorite: false,
        coords: [40.1772, 44.5035],
        date: "Вчера",
        contacts: {
            email: "jobs@techsphere.am",
            website: "https://techsphere.am"
        }
    }
];

const HomePage = () => {
    const [view, setView] = useState("list");
    const [searchQuery, setSearchQuery] = useState("");

    const [filters, setFilters] = useState({
        types: [],
        stack: [],
        minSalary: 0,
        search: ""
    });

    return (
        <div className="flex flex-col h-screen bg-background">
            {/* Header / Search Bar */}
            <header className="border-b p-4 bg-card flex flex-wrap items-center gap-4 sticky top-0 z-50">
                <div className="relative flex-1 min-w-[300px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                    <Input
                        placeholder="Поиск вакансий, стажировок, мероприятий..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Tabs value={view} onValueChange={setView} className="w-[200px]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="list"><List className="h-4 w-4 mr-2"/> Список</TabsTrigger>
                            <TabsTrigger value="map"><MapIcon className="h-4 w-4 mr-2"/> Карта</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </header>

            <main className="container mx-auto flex-1 overflow-hidden flex relative">
                <FilterContent
                    filters={filters}
                    onFilterChange={setFilters}
                />

                <div className="flex-1 overflow-y-auto p-6">
                    {view === "list" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {opportunities.map(item => <OpportunityCard key={item.id} data={item}/>)}
                        </div>
                    ) : (
                        <MapView data={opportunities}/>
                    )}
                </div>
            </main>
        </div>
    );
};

export default HomePage;