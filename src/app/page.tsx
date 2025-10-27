'use client';

import { AppHeader } from '@/components/common/app-header';
import { Clock, BookCheck, Star, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DashboardPage() {
  // Données pour les statistiques
  const stats = [
    {
      title: 'Time Spent (Today)',
      value: '45m',
      change: '+15m from yesterday',
      icon: Clock,
      changeType: 'increase',
    },
    {
      title: 'Topics Covered',
      value: '3',
      change: '+1 from last week',
      icon: BookCheck,
      changeType: 'increase',
    },
    {
      title: 'Average Score',
      value: '88%',
      change: '-2% from last week',
      icon: Star,
      changeType: 'decrease',
    },
  ];

  // Données pour le graphique
  const progressData = [
    { name: 'Mon', 'Time Spent (min)': 20, 'Quizzes Taken': 3 },
    { name: 'Tue', 'Time Spent (min)': 35, 'Quizzes Taken': 2 },
    { name: 'Wed', 'Time Spent (min)': 25, 'Quizzes Taken': 4 },
    { name: 'Thu', 'Time Spent (min)': 40, 'Quizzes Taken': 3 },
    { name: 'Fri', 'Time Spent (min)': 30, 'Quizzes Taken': 5 },
    { name: 'Sat', 'Time Spent (min)': 15, 'Quizzes Taken': 2 },
    { name: 'Sun', 'Time Spent (min)': 20, 'Quizzes Taken': 3 },
  ];

  // Recommandations
  const recommendations = [
    'Review past quizzes',
    'Practice vocabulary',
    'Complete lesson 5',
    'Try listening exercises'
  ];

  return (
    <div className="flex flex-col h-screen">
      <AppHeader title="Dashboard" />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-4 space-y-6">
          {/* Section Statistiques */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Today's Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="flex-1 min-w-0">
                  <CardHeader className="flex flex-row justify-between items-center pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      {stat.changeType === 'increase' ? (
                        <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1 text-red-500" />
                      )}
                      {stat.change}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Section Graphique */}
            <section className="flex-1">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Progress</CardTitle>
                  <CardDescription>Time spent and quizzes taken this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={progressData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="name" 
                          tick={{ fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis 
                          yAxisId="left"
                          orientation="left"
                          tickFormatter={value => `${value}m`}
                          tick={{ fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis 
                          yAxisId="right"
                          orientation="right"
                          tick={{ fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip />
                        <Legend 
                          wrapperStyle={{ 
                            fontSize: '0.8rem',
                            paddingTop: '10px'
                          }}
                        />
                        <Bar 
                          yAxisId="left"
                          dataKey="Time Spent (min)" 
                          fill="#8884d8" 
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar 
                          yAxisId="right" 
                          dataKey="Quizzes Taken" 
                          fill="#82ca9d" 
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section Recommandations */}
            <section className="lg:w-80">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>Your personalized learning path</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {recommendations.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-primary mr-2">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
