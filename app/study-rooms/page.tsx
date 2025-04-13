import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Video, MessageSquare, Lock, Globe, Plus } from "lucide-react"

export default function StudyRoomsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 pt-24 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Study Rooms</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Join or create virtual study rooms to collaborate with peers in real-time. Share resources, discuss topics,
            and solve problems together.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="w-full md:w-2/3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Available Rooms</h2>
              <Button className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                <Plus className="mr-2 h-4 w-4" /> Create Room
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="public">Public</TabsTrigger>
                <TabsTrigger value="private">Private</TabsTrigger>
                <TabsTrigger value="my-rooms">My Rooms</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                {studyRooms.map((room) => (
                  <StudyRoomCard key={room.id} room={room} />
                ))}
              </TabsContent>
              <TabsContent value="public" className="space-y-4">
                {studyRooms
                  .filter((room) => room.type === "public")
                  .map((room) => (
                    <StudyRoomCard key={room.id} room={room} />
                  ))}
              </TabsContent>
              <TabsContent value="private" className="space-y-4">
                {studyRooms
                  .filter((room) => room.type === "private")
                  .map((room) => (
                    <StudyRoomCard key={room.id} room={room} />
                  ))}
              </TabsContent>
              <TabsContent value="my-rooms" className="space-y-4">
                {studyRooms
                  .filter((room) => room.isOwner)
                  .map((room) => (
                    <StudyRoomCard key={room.id} room={room} />
                  ))}
              </TabsContent>
            </Tabs>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Find a Room</h3>
              <div className="space-y-4">
                <Input placeholder="Search by name, subject, or topic" className="bg-slate-800 border-slate-700" />

                <div>
                  <label className="text-sm font-medium text-slate-400 mb-2 block">Subject</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-slate-300">
                    <option value="">All Subjects</option>
                    <option value="math">Mathematics</option>
                    <option value="science">Science</option>
                    <option value="programming">Programming</option>
                    <option value="languages">Languages</option>
                    <option value="history">History</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-400 mb-2 block">Room Type</label>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 border-slate-700">
                      <Globe className="mr-1 h-4 w-4" /> Public
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-slate-700">
                      <Lock className="mr-1 h-4 w-4" /> Private
                    </Button>
                  </div>
                </div>

                <Button className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  Search Rooms
                </Button>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Join</h3>
              <p className="text-slate-400 mb-4">Have a room code? Enter it below to join instantly.</p>
              <div className="flex space-x-2">
                <Input placeholder="Enter room code" className="bg-slate-800 border-slate-700" />
                <Button className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface StudyRoom {
  id: string
  name: string
  subject: string
  participants: number
  maxParticipants: number
  type: "public" | "private"
  hasVideo: boolean
  hasChat: boolean
  isOwner: boolean
}

const studyRooms: StudyRoom[] = [
  {
    id: "1",
    name: "Advanced Calculus Study Group",
    subject: "Mathematics",
    participants: 8,
    maxParticipants: 12,
    type: "public",
    hasVideo: true,
    hasChat: true,
    isOwner: false,
  },
  {
    id: "2",
    name: "Python Programming Workshop",
    subject: "Programming",
    participants: 15,
    maxParticipants: 20,
    type: "public",
    hasVideo: true,
    hasChat: true,
    isOwner: true,
  },
  {
    id: "3",
    name: "Organic Chemistry Exam Prep",
    subject: "Science",
    participants: 5,
    maxParticipants: 8,
    type: "private",
    hasVideo: false,
    hasChat: true,
    isOwner: false,
  },
  {
    id: "4",
    name: "Spanish Conversation Practice",
    subject: "Languages",
    participants: 4,
    maxParticipants: 6,
    type: "public",
    hasVideo: true,
    hasChat: true,
    isOwner: false,
  },
  {
    id: "5",
    name: "World History Discussion",
    subject: "History",
    participants: 10,
    maxParticipants: 15,
    type: "private",
    hasVideo: false,
    hasChat: true,
    isOwner: true,
  },
]

function StudyRoomCard({ room }: { room: StudyRoom }) {
  return (
    <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-white">{room.name}</CardTitle>
            <CardDescription className="text-slate-400">Subject: {room.subject}</CardDescription>
          </div>
          <div className="flex items-center space-x-1 bg-slate-800 px-2 py-1 rounded text-xs text-slate-300">
            <Users size={14} />
            <span>
              {room.participants}/{room.maxParticipants}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-2">
          {room.type === "public" ? (
            <div className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full flex items-center">
              <Globe size={12} className="mr-1" /> Public
            </div>
          ) : (
            <div className="bg-amber-500/10 text-amber-400 text-xs px-2 py-1 rounded-full flex items-center">
              <Lock size={12} className="mr-1" /> Private
            </div>
          )}

          {room.hasVideo && (
            <div className="bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded-full flex items-center">
              <Video size={12} className="mr-1" /> Video
            </div>
          )}

          {room.hasChat && (
            <div className="bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded-full flex items-center">
              <MessageSquare size={12} className="mr-1" /> Chat
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="bubble-outline border-slate-700 text-slate-300 hover:bg-slate-800">
          View Details
        </Button>
        <Button className="bubble-button bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
          Join Room
        </Button>
      </CardFooter>
    </Card>
  )
}
