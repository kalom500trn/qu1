import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Video, Download, Settings } from 'lucide-react'

function App() {
  const [verse, setVerse] = useState('')
  const [surah, setSurah] = useState('')
  const [ayah, setAyah] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-emerald-600" />
            <h1 className="text-5xl font-bold text-gray-900">Quran Video Generator</h1>
          </div>
          <p className="text-xl text-gray-600">Create beautiful Quran verse videos with ease</p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="create" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="create">
              <Video className="w-4 h-4 mr-2" />
              Create Video
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="preview">
              <Download className="w-4 h-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>

          {/* Create Video Tab */}
          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>Select Quran Verse</CardTitle>
                <CardDescription>Choose a Surah and Ayah to create your video</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="surah">Surah Number</Label>
                    <Input
                      id="surah"
                      type="number"
                      placeholder="1-114"
                      value={surah}
                      onChange={(e) => setSurah(e.target.value)}
                      min="1"
                      max="114"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ayah">Ayah Number</Label>
                    <Input
                      id="ayah"
                      type="number"
                      placeholder="Enter ayah number"
                      value={ayah}
                      onChange={(e) => setAyah(e.target.value)}
                      min="1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="verse">Verse Text (Arabic)</Label>
                  <Textarea
                    id="verse"
                    placeholder="Enter or paste the Arabic text..."
                    value={verse}
                    onChange={(e) => setVerse(e.target.value)}
                    className="min-h-32 text-right text-2xl font-arabic"
                    dir="rtl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reciter">Reciter</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reciter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mishary">Mishary Rashid Alafasy</SelectItem>
                      <SelectItem value="sudais">Abdul Rahman Al-Sudais</SelectItem>
                      <SelectItem value="husary">Mahmoud Khalil Al-Husary</SelectItem>
                      <SelectItem value="minshawi">Mohamed Siddiq Al-Minshawi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" size="lg">
                  <Video className="w-4 h-4 mr-2" />
                  Generate Video
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Video Settings</CardTitle>
                <CardDescription>Customize your video appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="background">Background Style</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose background" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gradient">Gradient</SelectItem>
                      <SelectItem value="mosque">Mosque Image</SelectItem>
                      <SelectItem value="geometric">Islamic Pattern</SelectItem>
                      <SelectItem value="solid">Solid Color</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resolution">Video Resolution</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select resolution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="720p">720p (HD)</SelectItem>
                      <SelectItem value="1080p">1080p (Full HD)</SelectItem>
                      <SelectItem value="1440p">1440p (2K)</SelectItem>
                      <SelectItem value="2160p">2160p (4K)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Display Duration (seconds)</Label>
                  <Input
                    id="duration"
                    type="number"
                    placeholder="10"
                    min="5"
                    max="60"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preview Tab */}
          <TabsContent value="preview">
            <Card>
              <CardHeader>
                <CardTitle>Video Preview</CardTitle>
                <CardDescription>Preview and download your generated video</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-emerald-900 to-teal-800 rounded-lg flex items-center justify-center">
                  <p className="text-white text-xl">Video preview will appear here</p>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download Video
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
