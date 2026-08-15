import { motion } from 'framer-motion'
import { useState } from 'react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedArticle, setSelectedArticle] = useState(null)

  const categories = ['all', 'Workout Tips', 'Nutrition Advice', 'Boxing Techniques', 'Client Stories', 'Motivation']

  const articles = [
    {
      id: 1,
      title: '5 Essential Exercises for Building Strength',
      excerpt: 'Discover the key exercises that will help you build functional strength and muscle mass effectively.',
      category: 'Workout Tips',
      date: 'June 15, 2026',
      readTime: '5 min read',
      featured: true,
      image: 'https://i.pinimg.com/1200x/4c/67/a8/4c67a89ae2d612a870a5834f35d9d697.jpg',
      content: `
        <h2 class="text-3xl font-bold font-playfair text-crisp-white mb-6">5 Essential Exercises for Building Strength</h2>
        <p class="text-crisp-white/80 mb-6 font-spartan text-lg">If your goal is to build overall strength, these 5 foundational movement patterns should be the core of your training:</p>
        
        <div class="space-y-6">
          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-3">Squat – Builds lower-body strength</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">The squat is the king of lower-body exercises, targeting your quads, glutes, hamstrings, and core.</p>
            <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-4">
              <h4 class="font-semibold text-vibrant-green mb-2 font-spartan">Examples:</h4>
              <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-1">
                <li>Back squat</li>
                <li>Front squat</li>
                <li>Goblet squat</li>
              </ul>
            </div>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-3">Deadlift (Hip Hinge) – Develops the posterior chain</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">The deadlift targets your glutes, hamstrings, lower back, and traps, building total-body strength.</p>
            <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-4">
              <h4 class="font-semibold text-vibrant-green mb-2 font-spartan">Examples:</h4>
              <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-1">
                <li>Conventional deadlift</li>
                <li>Romanian deadlift</li>
                <li>Trap-bar deadlift</li>
              </ul>
            </div>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-3">Push – Strengthens the chest, shoulders, and triceps</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">Push movements build upper-body pushing strength and muscular development.</p>
            <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-4">
              <h4 class="font-semibold text-vibrant-green mb-2 font-spartan">Examples:</h4>
              <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-1">
                <li>Bench press</li>
                <li>Overhead press</li>
                <li>Push-ups</li>
              </ul>
            </div>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-3">Pull – Builds the back, biceps, and grip</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">Pull movements develop a strong back, biceps, and grip strength essential for overall fitness.</p>
            <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-4">
              <h4 class="font-semibold text-vibrant-green mb-2 font-spartan">Examples:</h4>
              <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-1">
                <li>Pull-ups</li>
                <li>Chin-ups</li>
                <li>Barbell rows</li>
                <li>Lat pulldowns</li>
              </ul>
            </div>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-3">Carry/Core Stability – Improves core strength, grip, and total-body stability</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">Carry exercises build functional strength, core stability, and grip endurance.</p>
            <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-4">
              <h4 class="font-semibold text-vibrant-green mb-2 font-spartan">Examples:</h4>
              <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-1">
                <li>Farmer's carry</li>
                <li>Suitcase carry</li>
                <li>Front rack carry</li>
              </ul>
            </div>
          </div>

          <div class="bg-vibrant-green/5 border-l-4 border-vibrant-green p-6 rounded-r-lg">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-4">Why these five?</h3>
            <p class="text-crisp-white/90 font-spartan text-lg mb-3">Together, they train nearly every major muscle group and teach your body to produce force efficiently. They also improve coordination, balance, and athleticism.</p>
            <p class="text-crisp-white/80 font-spartan">By mastering these five foundational movement patterns, you'll build a solid strength foundation that transfers to real-life activities and athletic performance.</p>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: 'Nutrition Basics: Fueling Your Workouts',
      excerpt: 'Learn the fundamentals of sports nutrition and how to properly fuel your body for optimal performance.',
      category: 'Nutrition Advice',
      date: 'June 10, 2026',
      readTime: '7 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: `
        <h2 class="text-3xl font-bold font-playfair text-crisp-white mb-6">Nutrition Basics: Fueling Your Workouts</h2>
        <p class="text-crisp-white/80 mb-6 font-spartan text-lg">Here are the fundamentals of sports nutrition and how to properly fuel your body for optimal performance:</p>
        
        <div class="space-y-6">
          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">1. Eat Enough Calories</h3>
            <p class="text-crisp-white/80 font-spartan">Your body needs enough energy to support training, recovery, and daily activities. Eating too little can lead to fatigue, poor performance, muscle loss, and slower recovery.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">2. Prioritize Carbohydrates</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">Carbohydrates are your body's primary fuel source during moderate- to high-intensity exercise.</p>
            <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-2">
              <li>Eat complex carbs such as oats, rice, potatoes, whole grains, fruits, and vegetables.</li>
              <li>Increase carbohydrate intake on days with harder or longer training sessions.</li>
            </ul>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">3. Consume Enough Protein</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">Protein supports muscle repair, growth, and recovery.</p>
            <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-2">
              <li>Aim for around 1.2–2.0 g of protein per kilogram of body weight per day, depending on training intensity and goals.</li>
              <li>Good sources include lean meat, fish, eggs, dairy, beans, lentils, and soy products.</li>
            </ul>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">4. Include Healthy Fats</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">Healthy fats support hormone production, overall health, and provide energy during lower-intensity activities.</p>
            <p class="text-crisp-white/80 font-spartan">Choose foods like avocados, nuts, seeds, olive oil, and fatty fish.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">5. Stay Hydrated</h3>
            <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-2">
              <li>Even mild dehydration can reduce performance.</li>
              <li>Drink fluids throughout the day.</li>
              <li>During long or intense workouts, replace both fluids and electrolytes, especially if you're sweating heavily.</li>
            </ul>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">6. Time Your Nutrition</h3>
            <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-2">
              <li><strong>Before training (1–3 hours):</strong> Eat a meal rich in carbohydrates with moderate protein and low fat.</li>
              <li><strong>After training (within about 2 hours):</strong> Consume carbohydrates to replenish energy stores and protein to support muscle recovery.</li>
            </ul>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">7. Eat Micronutrient-Rich Foods</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">Vitamins and minerals are essential for energy production, immunity, bone health, and recovery.</p>
            <p class="text-crisp-white/80 font-spartan">Eat a variety of colorful fruits, vegetables, whole grains, and lean proteins.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">8. Recover Well</h3>
            <p class="text-crisp-white/80 font-spartan">Nutrition works best alongside quality sleep and adequate rest. Recovery is when your body adapts and becomes stronger.</p>
          </div>

          <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-4">Sample Pre- and Post-Workout Meals</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-crisp-white mb-2 font-spartan">Pre-workout:</h4>
                <p class="text-crisp-white/80 font-spartan">Oatmeal with banana and peanut butter, or rice with chicken.</p>
              </div>
              <div>
                <h4 class="font-semibold text-crisp-white mb-2 font-spartan">Post-workout:</h4>
                <p class="text-crisp-white/80 font-spartan">Grilled chicken with rice and vegetables, Greek yogurt with fruit, or a protein smoothie with a banana.</p>
              </div>
            </div>
          </div>

          <div class="bg-vibrant-green/5 border-l-4 border-vibrant-green p-6 rounded-r-lg">
            <p class="text-crisp-white/90 font-spartan text-lg italic">The key principle of sports nutrition is simple: fuel your body with enough quality carbohydrates, protein, healthy fats, fluids, and micronutrients at the right times so you can train hard, recover effectively, and perform at your best.</p>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: 'Boxing Fundamentals: Stance and Movement',
      excerpt: 'Master the basics of boxing with this comprehensive guide to proper stance and footwork.',
      category: 'Boxing Techniques',
      date: 'June 5, 2026',
      readTime: '6 min read',
      featured: false,
      image: 'https://i.pinimg.com/736x/92/fd/e9/92fde90e7a0a2ff73b9e2d49d3a72712.jpg',
      content: `
        <h2 class="text-3xl font-bold font-playfair text-crisp-white mb-6">Boxing Fundamentals: Stance and Movement</h2>
        <p class="text-crisp-white/80 mb-6 font-spartan text-lg">A strong stance and good footwork are the foundation of boxing. Power, balance, defense, and effective punching all begin with proper positioning and movement.</p>
        
        <div class="space-y-6">
          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-4">1. Proper Boxing Stance</h3>
            
            <div class="mb-4">
              <h4 class="font-semibold text-crisp-white mb-2 font-spartan">For an orthodox boxer (right-handed):</h4>
              <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-1">
                <li>Left foot in front, right foot behind.</li>
                <li>Feet shoulder-width apart.</li>
                <li>Knees slightly bent.</li>
                <li>Weight distributed evenly (about 50/50).</li>
                <li>Hands up to protect the face.</li>
                <li>Chin tucked and eyes forward.</li>
                <li>Elbows close to the body to protect the ribs.</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-crisp-white mb-2 font-spartan">For a southpaw boxer (left-handed):</h4>
              <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-1">
                <li>Right foot in front, left foot behind.</li>
                <li>The rest of the stance remains the same.</li>
              </ul>
            </div>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-3">2. Balance</h3>
            <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-2">
              <li>Stay relaxed and balanced.</li>
              <li>Avoid leaning too far forward or backward.</li>
              <li>Keep your center of gravity over your feet so you're ready to attack or defend at any moment.</li>
            </ul>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-4">3. Basic Footwork</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">Always move by stepping with the foot in the direction you're traveling, then bring the other foot with it.</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-4">
                <h4 class="font-semibold text-vibrant-green mb-1 font-spartan">Forward:</h4>
                <p class="text-crisp-white/80 font-spartan">Front foot first, then back foot.</p>
              </div>
              <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-4">
                <h4 class="font-semibold text-vibrant-green mb-1 font-spartan">Backward:</h4>
                <p class="text-crisp-white/80 font-spartan">Back foot first, then front foot.</p>
              </div>
              <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-4">
                <h4 class="font-semibold text-vibrant-green mb-1 font-spartan">Left:</h4>
                <p class="text-crisp-white/80 font-spartan">Left foot first, then right foot.</p>
              </div>
              <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-4">
                <h4 class="font-semibold text-vibrant-green mb-1 font-spartan">Right:</h4>
                <p class="text-crisp-white/80 font-spartan">Right foot first, then left foot.</p>
              </div>
            </div>
            <p class="text-crisp-white/80 font-spartan mt-3">Maintain your stance throughout every movement.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-3">4. Don't Cross Your Feet</h3>
            <p class="text-crisp-white/80 font-spartan">Crossing your feet reduces balance, slows your movement, and makes you vulnerable to attacks.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-3">5. Stay Light on Your Feet</h3>
            <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-2">
              <li>Move with short, controlled steps.</li>
              <li>Avoid bouncing excessively or taking large steps.</li>
              <li>Stay ready to punch, defend, or change direction instantly.</li>
            </ul>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-4">6. Pivoting</h3>
            <p class="text-crisp-white/80 font-spartan mb-3">Pivot by rotating on the lead foot while turning the rear foot.</p>
            <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-2">
              <li>Helps create angles.</li>
              <li>Allows you to avoid attacks.</li>
              <li>Sets up better punching opportunities.</li>
            </ul>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-4">7. Common Mistakes</h3>
            <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-2">
              <li>Standing too square.</li>
              <li>Crossing the feet.</li>
              <li>Dropping the hands.</li>
              <li>Standing flat-footed.</li>
              <li>Taking steps that are too large.</li>
              <li>Looking down instead of keeping your eyes on your opponent.</li>
            </ul>
          </div>

          <div class="bg-vibrant-green/5 border-l-4 border-vibrant-green p-6 rounded-r-lg">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-3">Key Takeaway</h3>
            <p class="text-crisp-white/90 font-spartan text-lg">Good boxing starts with your feet. A solid stance provides balance and protection, while efficient footwork helps you control distance, create angles, defend effectively, and deliver powerful punches. Master these fundamentals before focusing on advanced combinations or techniques.</p>
          </div>
        </div>
      `
    },
    // {
    //   id: 4,
    //   title: 'Client Success: John\'s 3-Month Transformation',
    //   excerpt: 'Read about John\'s incredible journey and how he achieved his fitness goals in just 3 months.',
    //   category: 'Client Stories',
    //   date: 'May 28, 2026',
    //   readTime: '4 min read',
    //   featured: false,
    //   image: 'https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=800'
    // },
    {
      id: 5,
      title: 'Staying Motivated: Tips for Consistency',
      excerpt: 'Discover practical strategies to maintain motivation and stay consistent with your fitness routine.',
      category: 'Motivation',
      date: 'May 20, 2026',
      readTime: '5 min read',
      featured: false,
      image: 'https://i.pinimg.com/736x/d4/cb/e7/d4cbe7a88d963ffb27431c3cdb8fd0fc.jpg',
      content: `
        <h2 class="text-3xl font-bold font-playfair text-crisp-white mb-6">Staying Motivated: Tips for Consistency</h2>
        <p class="text-crisp-white/80 mb-6 font-spartan text-lg">Motivation comes and goes, but consistency is what produces lasting results. Here are practical tips to help you stay on track:</p>
        
        <div class="space-y-6">
          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">1. Set Clear Goals</h3>
            <p class="text-crisp-white/80 font-spartan">Have specific, realistic, and measurable goals. Break big goals into smaller milestones to stay motivated.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">2. Build a Routine</h3>
            <p class="text-crisp-white/80 font-spartan">Train at the same time on your scheduled days. Making exercise part of your routine reduces the need to rely on motivation.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">3. Focus on Progress, Not Perfection</h3>
            <p class="text-crisp-white/80 font-spartan">Celebrate small improvements, whether it's lifting more weight, improving your technique, or completing an extra round.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">4. Remember Your "Why"</h3>
            <p class="text-crisp-white/80 font-spartan">Keep your reason for training in mind—whether it's improving health, building strength, learning boxing, or boosting confidence.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">5. Track Your Progress</h3>
            <p class="text-crisp-white/80 font-spartan">Record your workouts, body measurements, or performance. Seeing your progress over time reinforces consistency.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">6. Enjoy the Process</h3>
            <p class="text-crisp-white/80 font-spartan">Choose training methods you enjoy. You're much more likely to stick with a program that you find challenging and rewarding.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">7. Be Disciplined</h3>
            <p class="text-crisp-white/80 font-spartan">Motivation isn't always there. On low-energy days, rely on discipline and your routine to keep moving forward.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">8. Recover Properly</h3>
            <p class="text-crisp-white/80 font-spartan">Get enough sleep, eat nutritious foods, and take rest days. A well-recovered body performs better and is easier to keep motivated.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">9. Surround Yourself with Positive Support</h3>
            <p class="text-crisp-white/80 font-spartan">Train with a coach, partner, or supportive community that encourages you and keeps you accountable.</p>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">10. Stay Patient</h3>
            <p class="text-crisp-white/80 font-spartan">Results take time. Consistent effort over weeks and months leads to lasting improvements in strength, fitness, and skill.</p>
          </div>

          <div class="bg-vibrant-green/5 border-l-4 border-vibrant-green p-6 rounded-r-lg">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">Key Takeaway</h3>
            <p class="text-crisp-white/90 font-spartan text-lg">Success doesn't come from being motivated every day—it comes from showing up consistently. Stay committed to your goals, trust the process, and remember that every workout brings you one step closer to becoming stronger, healthier, and more confident.</p>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: 'High-Intensity Interval Training Explained',
      excerpt: 'Learn about HIIT workouts and how they can help you burn fat and improve cardiovascular fitness.',
      category: 'Workout Tips',
      date: 'May 15, 2026',
      readTime: '6 min read',
      featured: false,
      image: 'https://i.pinimg.com/1200x/f6/53/52/f6535237eef63bb6b9beeb57e1a28292.jpg',
      content: `
        <h2 class="text-3xl font-bold font-playfair text-crisp-white mb-6">High-Intensity Interval Training Explained</h2>
        <p class="text-crisp-white/80 mb-6 font-spartan text-lg">High-Intensity Interval Training (HIIT) is a training method that alternates short bursts of intense exercise with brief periods of rest or low-intensity recovery.</p>
        
        <div class="space-y-6">
          <div class="bg-vibrant-green/10 border border-vibrant-green/30 rounded-lg p-6">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-4">Example HIIT Structure</h3>
            <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-2">
              <li>30 seconds of all-out effort (e.g., sprints, burpees, or heavy bag punches)</li>
              <li>30–60 seconds of walking or light movement</li>
              <li>Repeat for 10–20 minutes</li>
            </ul>
          </div>

          <div class="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 class="text-2xl font-bold font-playfair text-vibrant-green mb-4">Benefits of HIIT</h3>
            <ul class="list-disc list-inside text-crisp-white/80 font-spartan space-y-2">
              <li>Improves cardiovascular fitness</li>
              <li>Burns a high number of calories in a short time</li>
              <li>Increases endurance and power</li>
              <li>Can continue burning calories after the workout (the "afterburn" effect)</li>
              <li>Time-efficient for busy schedules</li>
            </ul>
          </div>

          <div class="bg-vibrant-green/5 border-l-4 border-vibrant-green p-6 rounded-r-lg">
            <h3 class="text-xl font-bold font-playfair text-vibrant-green mb-3">HIIT in Boxing</h3>
            <p class="text-crisp-white/90 font-spartan text-lg">HIIT is popular in boxing because it closely mimics the demands of a fight, with repeated periods of high-intensity work followed by short recovery intervals. This makes it an excellent training method for fighters looking to improve their conditioning and performance in the ring.</p>
          </div>
        </div>
      `
    }
  ]

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const featuredArticle = articles.find(a => a.featured)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.pinimg.com/736x/4a/a9/33/4aa933c80f410edb82173f535f9d6c0d.jpg" alt="Blog background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-playfair text-crisp-white mb-6"
          >
            Fitness <span className="text-vibrant-green">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crisp-white/90 max-w-2xl mx-auto font-spartan"
          >
            Expert tips, nutrition advice, and inspiring stories to help you on your fitness journey
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-deep-charcoal border-b border-white/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-vibrant-green font-semibold mb-2 block font-spartan">Featured Article</span>
              <h2 className="text-4xl font-bold font-playfair text-crisp-white mb-4">{featuredArticle.title}</h2>
              <p className="text-crisp-white/80 text-lg mb-6 font-spartan">{featuredArticle.excerpt}</p>
              <div className="flex items-center space-x-4 text-crisp-white/60 mb-6">
                <span className="font-spartan">{featuredArticle.date}</span>
                <span>•</span>
                <span className="font-spartan">{featuredArticle.readTime}</span>
                <span>•</span>
                <span className="text-vibrant-green font-spartan">{featuredArticle.category}</span>
              </div>
              <button 
                onClick={() => setSelectedArticle(featuredArticle)}
                className="bg-vibrant-green text-deep-charcoal px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 font-spartan"
              >
                Read Full Article
              </button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-8 bg-deep-charcoal border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-vibrant-green text-deep-charcoal'
                    : 'bg-white/10 text-crisp-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-vibrant-green transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image || 'https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=800'}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-crisp-white/60 mb-3">
                    <span className="text-vibrant-green font-spartan">{article.category}</span>
                    <span>•</span>
                    <span className="font-spartan">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold font-playfair text-crisp-white mb-2 group-hover:text-vibrant-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-crisp-white/70 mb-4 font-spartan">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-crisp-white/60 text-sm font-spartan">{article.readTime}</span>
                    <button 
                      onClick={() => setSelectedArticle(article)}
                      className="text-vibrant-green hover:text-white transition-colors group-hover:translate-x-2 transform inline-block transition-transform font-spartan"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1552334/pexels-photo-1552334.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Newsletter background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-vibrant-green/90"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-playfair text-deep-charcoal mb-6"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-deep-charcoal/90 mb-8 max-w-2xl mx-auto font-spartan"
          >
            Subscribe to our newsletter for the latest fitness tips, nutrition advice, and client stories
          </motion.p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-deep-charcoal text-crisp-white placeholder-crisp-white/60 focus:outline-none focus:ring-2 focus:ring-white font-spartan"
            />
            <button className="bg-deep-charcoal text-crisp-white px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 font-spartan">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setSelectedArticle(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-deep-charcoal border border-white/10 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-deep-charcoal/95 backdrop-blur border-b border-white/10 p-6 flex items-center justify-between z-10">
              <div>
                <span className="text-vibrant-green font-semibold text-sm font-spartan">{selectedArticle.category}</span>
                <h2 className="text-2xl font-bold font-playfair text-crisp-white">{selectedArticle.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-crisp-white/60 hover:text-crisp-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              {selectedArticle.content ? (
                <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} className="prose prose-invert max-w-none" />
              ) : (
                <div className="text-center py-12">
                  <p className="text-crisp-white/60 font-spartan">Full article content coming soon...</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Blog
