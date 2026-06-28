import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Transformations from './pages/Transformations'
import Booking from './pages/Booking'
import Gallery from './pages/Gallery'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import PersonalTraining from './pages/services/PersonalTraining'
import OnlineCoaching from './pages/services/OnlineCoaching'
import Boxing from './pages/services/Boxing'
import MuscleBuilding from './pages/services/MuscleBuilding'
import Nutrition from './pages/services/Nutrition'
import GroupTraining from './pages/services/GroupTraining'
import ApartmentTraining from './pages/services/ApartmentTraining'
import AdminLayout from './components/CMS/AdminLayout'
import AdminDashboard from './components/CMS/AdminDashboard'
import ArticleList from './components/CMS/ArticleList'
import ArticleEditor from './components/CMS/ArticleEditor'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-deep-charcoal text-crisp-white font-spartan">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/personal-training" element={<PersonalTraining />} />
            <Route path="/services/online-coaching" element={<OnlineCoaching />} />
            <Route path="/services/boxing" element={<Boxing />} />
            <Route path="/services/muscle-building" element={<MuscleBuilding />} />
            <Route path="/services/nutrition" element={<Nutrition />} />
            <Route path="/services/group-training" element={<GroupTraining />} />
            <Route path="/services/apartment-training" element={<ApartmentTraining />} />
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="articles" element={<ArticleList />} />
              <Route path="articles/new" element={<ArticleEditor />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
