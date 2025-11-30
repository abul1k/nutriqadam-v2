'use client'
import React, { useState } from 'react'
import {
  Menu,
  X,
  User,
  Bell,
  Calendar,
  CreditCard,
  FileText,
  Settings,
  Heart,
  Shield,
  Apple,
  Clock,
  CheckCircle,
  AlertCircle,
  Languages,
} from 'lucide-react'

export default function NutriQadamApp() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const childProfile = {
    name: 'Aziza Karimova',
    age: 5,
    allergies: ['Milk', 'Peanuts'],
    conditions: ['Asthma'],
    diet: 'Gluten-free',
  }

  const todayMenu = {
    breakfast: {
      name: 'Oatmeal with Fresh Berries',
      calories: 280,
      time: '8:30 AM',
      nutrients: ['Vitamin C', 'Fiber', 'Iron'],
      status: 'delivered',
    },
    lunch: {
      name: 'Grilled Chicken with Quinoa & Vegetables',
      calories: 420,
      time: '12:30 PM',
      nutrients: ['Protein', 'Vitamin A', 'Zinc'],
      status: 'preparing',
    },
    snack: {
      name: 'Fresh Fruit Plate & Yogurt Alternative',
      calories: 180,
      time: '3:30 PM',
      nutrients: ['Vitamin C', 'Calcium', 'Probiotics'],
      status: 'scheduled',
    },
  }

  const weeklyMenu = {
    Monday: {
      breakfast: {
        name: 'Oatmeal with Berries',
        calories: 280,
        time: '8:30 AM',
        nutrients: ['Vitamin C', 'Fiber', 'Iron'],
        status: 'delivered',
      },
      lunch: {
        name: 'Grilled Chicken & Quinoa',
        calories: 420,
        time: '12:30 PM',
        nutrients: ['Protein', 'Vitamin A', 'Zinc'],
        status: 'preparing',
      },
      snack: {
        name: 'Fruit & Yogurt',
        calories: 180,
        time: '3:30 PM',
        nutrients: ['Vitamin C', 'Calcium', 'Probiotics'],
        status: 'scheduled',
      },
    },
    Tuesday: {
      breakfast: {
        name: 'Scrambled Eggs & Toast',
        calories: 300,
        time: '8:30 AM',
        nutrients: ['Protein', 'Vitamin D'],
        status: 'scheduled',
      },
      lunch: {
        name: 'Pasta with Veggies',
        calories: 400,
        time: '12:30 PM',
        nutrients: ['Fiber', 'Vitamin C'],
        status: 'scheduled',
      },
      snack: {
        name: 'Granola Bar & Milk',
        calories: 200,
        time: '3:30 PM',
        nutrients: ['Calcium', 'Protein'],
        status: 'scheduled',
      },
    },
    Wednesday: {
      breakfast: {
        name: 'Pancakes with Fruits',
        calories: 320,
        time: '8:30 AM',
        nutrients: ['Vitamin C', 'Carbs'],
        status: 'scheduled',
      },
      lunch: {
        name: 'Rice & Chicken Curry',
        calories: 450,
        time: '12:30 PM',
        nutrients: ['Protein', 'Iron'],
        status: 'scheduled',
      },
      snack: {
        name: 'Apple Slices & Peanut Butter',
        calories: 190,
        time: '3:30 PM',
        nutrients: ['Fiber', 'Protein'],
        status: 'scheduled',
      },
    },
    Thursday: {
      breakfast: {
        name: 'Smoothie Bowl',
        calories: 280,
        time: '8:30 AM',
        nutrients: ['Vitamin C', 'Fiber'],
        status: 'scheduled',
      },
      lunch: {
        name: 'Veggie Wrap',
        calories: 410,
        time: '12:30 PM',
        nutrients: ['Fiber', 'Vitamin A'],
        status: 'scheduled',
      },
      snack: {
        name: 'Yogurt & Berries',
        calories: 180,
        time: '3:30 PM',
        nutrients: ['Probiotics', 'Vitamin C'],
        status: 'scheduled',
      },
    },
    Friday: {
      breakfast: {
        name: 'Avocado Toast',
        calories: 290,
        time: '8:30 AM',
        nutrients: ['Healthy Fats', 'Fiber'],
        status: 'scheduled',
      },
      lunch: {
        name: 'Fish & Veggies',
        calories: 430,
        time: '12:30 PM',
        nutrients: ['Omega-3', 'Protein'],
        status: 'scheduled',
      },
      snack: {
        name: 'Trail Mix',
        calories: 200,
        time: '3:30 PM',
        nutrients: ['Protein', 'Fiber'],
        status: 'scheduled',
      },
    },
  }

  const Navigation = () => (
    <nav className='bg-white border-b border-gray-200 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <div className='flex items-center space-x-2'>
              <Apple className='w-8 h-8 text-emerald-600' />
              <span className='text-2xl font-bold text-emerald-600'>
                NutriQadam
              </span>
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-4'>
            <button className='p-2 text-gray-600 hover:text-emerald-600 relative'>
              <Bell className='w-6 h-6' />
              <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
            </button>
            <button className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100'>
              <User className='w-5 h-5 text-gray-700' />
              <span className='text-gray-700'>Parent Account</span>
            </button>
          </div>
          <div className='flex md:hidden items-center space-x-2'>
            <button>
              {/* <Languages className='w-6 h-6 text-gray-500' /> */}
            </button>
            <button className='p-2 text-gray-600 hover:text-emerald-600 relative'>
              <Bell className='w-6 h-6' />
              <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          <div className='px-4 py-3 space-y-2'>
            <button className='w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100'>
              Notifications
            </button>
            <button className='w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100'>
              Account Settings
            </button>
          </div>
        </div>
      )}
    </nav>
  )

  const Sidebar = () => (
    <div className='hidden lg:block w-64 bg-white border-r border-gray-200 h-screen sticky top-16'>
      <div className='p-6 space-y-2'>
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'dashboard'
              ? 'bg-emerald-50 text-emerald-700'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Calendar className='w-5 h-5' />
          <span className='font-medium'>Dashboard</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'profile'
              ? 'bg-emerald-50 text-emerald-700'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <User className='w-5 h-5' />
          <span className='font-medium'>Child Profile</span>
        </button>

        <button
          onClick={() => setActiveTab('menu')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'menu'
              ? 'bg-emerald-50 text-emerald-700'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <FileText className='w-5 h-5' />
          <span className='font-medium'>Weekly Menu</span>
        </button>

        <button
          onClick={() => setActiveTab('subscription')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'subscription'
              ? 'bg-emerald-50 text-emerald-700'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <CreditCard className='w-5 h-5' />
          <span className='font-medium'>Subscription</span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'settings'
              ? 'bg-emerald-50 text-emerald-700'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Settings className='w-5 h-5' />
          <span className='font-medium'>Settings</span>
        </button>
      </div>
    </div>
  )

  const Dashboard = () => (
    <div className='space-y-6'>
      <div className='bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white'>
        <h2 className='text-2xl font-bold mb-2'>Welcome back!</h2>
        <p className='text-emerald-50'>Today's meals for {childProfile.name}</p>
      </div>

      <div className='grid md:grid-cols-3 gap-6'>
        <div className='bg-white rounded-xl border border-gray-200 p-6'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='font-semibold text-gray-900'>Breakfast</h3>
            <CheckCircle className='w-5 h-5 text-green-500' />
          </div>
          <p className='text-gray-700 mb-2'>{todayMenu.breakfast.name}</p>
          <div className='flex items-center text-sm text-gray-500 space-x-4'>
            <span className='flex items-center'>
              <Clock className='w-4 h-4 mr-1' />
              {todayMenu.breakfast.time}
            </span>
            <span>{todayMenu.breakfast.calories} kcal</span>
          </div>
          <div className='mt-3 flex flex-wrap gap-1'>
            {todayMenu.breakfast.nutrients.map((n) => (
              <span
                key={n}
                className='text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full'
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='font-semibold text-gray-900'>Lunch</h3>
            <div className='flex items-center text-orange-500'>
              <Clock className='w-5 h-5 animate-pulse' />
            </div>
          </div>
          <p className='text-gray-700 mb-2'>{todayMenu.lunch.name}</p>
          <div className='flex items-center text-sm text-gray-500 space-x-4'>
            <span className='flex items-center'>
              <Clock className='w-4 h-4 mr-1' />
              {todayMenu.lunch.time}
            </span>
            <span>{todayMenu.lunch.calories} kcal</span>
          </div>
          <div className='mt-3 flex flex-wrap gap-1'>
            {todayMenu.lunch.nutrients.map((n) => (
              <span
                key={n}
                className='text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full'
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='font-semibold text-gray-900'>Snack</h3>
            <div className='w-5 h-5 border-2 border-gray-300 rounded-full'></div>
          </div>
          <p className='text-gray-700 mb-2'>{todayMenu.snack.name}</p>
          <div className='flex items-center text-sm text-gray-500 space-x-4'>
            <span className='flex items-center'>
              <Clock className='w-4 h-4 mr-1' />
              {todayMenu.snack.time}
            </span>
            <span>{todayMenu.snack.calories} kcal</span>
          </div>
          <div className='mt-3 flex flex-wrap gap-1'>
            {todayMenu.snack.nutrients.map((n) => (
              <span
                key={n}
                className='text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full'
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        <div className='bg-white rounded-xl border border-gray-200 p-6'>
          <h3 className='font-semibold text-gray-900 mb-4 flex items-center'>
            <Heart className='w-5 h-5 mr-2 text-red-500' />
            Health Profile
          </h3>
          <div className='space-y-3'>
            <div>
              <span className='text-sm text-gray-500'>Allergies:</span>
              <div className='flex gap-2 mt-1'>
                {childProfile.allergies.map((a) => (
                  <span
                    key={a}
                    className='text-sm bg-red-50 text-red-700 px-3 py-1 rounded-full'
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className='text-sm text-gray-500'>Conditions:</span>
              <div className='flex gap-2 mt-1'>
                {childProfile.conditions.map((c) => (
                  <span
                    key={c}
                    className='text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full'
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className='text-sm text-gray-500'>Special Diet:</span>
              <div className='flex gap-2 mt-1'>
                <span className='text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-full'>
                  {childProfile.diet}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6'>
          <h3 className='font-semibold text-gray-900 mb-4 flex items-center'>
            <AlertCircle className='w-5 h-5 mr-2 text-yellow-500' />
            Recent Notifications
          </h3>
          <div className='space-y-3'>
            <div className='flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg'>
              <AlertCircle className='w-5 h-5 text-yellow-600 shrink-0 mt-0.5' />
              <div>
                <p className='text-sm font-medium text-gray-900'>
                  Menu Change Alert
                </p>
                <p className='text-xs text-gray-600 mt-1'>
                  Tomorrow's lunch updated to avoid allergens
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-3 p-3 bg-green-50 rounded-lg'>
              <CheckCircle className='w-5 h-5 text-green-600 shrink-0 mt-0.5' />
              <div>
                <p className='text-sm font-medium text-gray-900'>
                  Delivery Confirmed
                </p>
                <p className='text-xs text-gray-600 mt-1'>
                  Breakfast delivered at 8:32 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ProfileTab = () => (
    <div className='space-y-6'>
      <div className='bg-white rounded-xl border border-gray-200 p-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-6'>
          Child Health Profile
        </h2>

        <div className='space-y-6'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Child's Name
              </label>
              <input
                type='text'
                defaultValue={childProfile.name}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-500'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Age
              </label>
              <input
                type='number'
                defaultValue={childProfile.age}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-500'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Food Allergies
            </label>
            <div className='flex flex-wrap gap-2 mb-2'>
              {childProfile.allergies.map((a) => (
                <span
                  key={a}
                  className='bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm flex items-center'
                >
                  {a}
                  <X className='w-4 h-4 ml-1 cursor-pointer' />
                </span>
              ))}
            </div>
            <input
              type='text'
              placeholder='Add new allergy...'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-500'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Chronic Conditions
            </label>
            <div className='flex flex-wrap gap-2 mb-2'>
              {childProfile.conditions.map((c) => (
                <span
                  key={c}
                  className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center'
                >
                  {c}
                  <X className='w-4 h-4 ml-1 cursor-pointer' />
                </span>
              ))}
            </div>
            <input
              type='text'
              placeholder='Add condition...'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-500'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Special Diet
            </label>
            <select className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-500'>
              <option>Gluten-free</option>
              <option>Vegan</option>
              <option>Sugar-free</option>
              <option>Dairy-free</option>
              <option>No special diet</option>
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Doctor's Notes
            </label>
            <textarea
              rows={4}
              placeholder='Add any additional medical notes or recommendations...'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-500'
            />
          </div>

          <button className='w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors'>
            Save Profile Changes
          </button>
        </div>
      </div>
    </div>
  )

  const MenuTab = () => (
    <div className='space-y-6'>
      <div className='bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white'>
        <h2 className='text-2xl font-bold mb-2'>Weekly Menu</h2>
        <p className='text-emerald-50'>
          This weekly menu is designed specifically for your kid.{' '}
          <b>All allergies and conditions are taken into account.</b>
        </p>
      </div>

      <div className='space-y-8 mt-6'>
        {Object.entries(weeklyMenu).map(([day, meals]) => (
          <div key={day}>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>{day}</h3>
            <div className='grid md:grid-cols-3 gap-6'>
              {['breakfast', 'lunch', 'snack'].map((mealType) => {
                const meal = meals[mealType]
                return (
                  <div
                    key={mealType}
                    className='bg-white rounded-xl border border-gray-200 p-6'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <h4 className='font-semibold text-gray-900 capitalize'>
                        {mealType}
                      </h4>
                      {meal.status === 'delivered' ? (
                        <CheckCircle className='w-5 h-5 text-emerald-500' />
                      ) : meal.status === 'preparing' ? (
                        <Clock className='w-5 h-5 text-yellow-500' />
                      ) : (
                        <div className='w-5 h-5 border-2 border-gray-300 rounded-full'></div>
                      )}
                    </div>
                    <p className='text-gray-700 mb-2'>{meal.name}</p>
                    <div className='flex items-center text-sm text-gray-500 space-x-4'>
                      <span className='flex items-center'>
                        <Clock className='w-4 h-4 mr-1' />
                        {meal.time}
                      </span>
                      <span>{meal.calories} kcal</span>
                    </div>
                    <div className='mt-3 flex flex-wrap gap-1'>
                      {meal.nutrients.map((n) => (
                        <span
                          key={n}
                          className='text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full'
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const SubscriptionTab = () => (
    <div className='space-y-6'>
      <div className='bg-white rounded-xl border border-gray-200 p-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-6'>
          Subscription Plans
        </h2>

        <div className='grid md:grid-cols-3 gap-6 mb-8'>
          <div className='border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors cursor-pointer'>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>1 Month</h3>
            <p className='text-3xl font-bold text-emerald-600 mb-4'>
              800,000 <span className='text-lg text-gray-500'>UZS</span>
            </p>
            <ul className='space-y-2 mb-6'>
              <li className='flex items-center text-sm text-gray-600'>
                <CheckCircle className='w-4 h-4 mr-2 text-emerald-500' />3 meals
                per day
              </li>
              <li className='flex items-center text-sm text-gray-600'>
                <CheckCircle className='w-4 h-4 mr-2 text-emerald-500' />
                Personalized menu
              </li>
              <li className='flex items-center text-sm text-gray-600'>
                <CheckCircle className='w-4 h-4 mr-2 text-emerald-500' />
                Full transparency
              </li>
            </ul>
            <button className='w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors'>
              Select Plan
            </button>
          </div>

          <div className='border-2 border-emerald-500 rounded-xl p-6 relative'>
            <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>
              Most Popular
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>3 Months</h3>
            <p className='text-3xl font-bold text-emerald-600 mb-4'>
              2,200,000 <span className='text-lg text-gray-500'>UZS</span>
            </p>
            <p className='text-sm text-emerald-600 font-semibold mb-4'>
              Save 8%
            </p>
            <ul className='space-y-2 mb-6'>
              <li className='flex items-center text-sm text-gray-600'>
                <CheckCircle className='w-4 h-4 mr-2 text-emerald-500' />3 meals
                per day
              </li>
              <li className='flex items-center text-sm text-gray-600'>
                <CheckCircle className='w-4 h-4 mr-2 text-emerald-500' />
                Personalized menu
              </li>
              <li className='flex items-center text-sm text-gray-600'>
                <CheckCircle className='w-4 h-4 mr-2 text-emerald-500' />
                Priority support
              </li>
            </ul>
            <button className='w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors'>
              Select Plan
            </button>
          </div>

          <div className='border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors cursor-pointer'>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>6 Months</h3>
            <p className='text-3xl font-bold text-emerald-600 mb-4'>
              4,200,000 <span className='text-lg text-gray-500'>UZS</span>
            </p>
            <p className='text-sm text-emerald-600 font-semibold mb-4'>
              Save 12%
            </p>
            <ul className='space-y-2 mb-6'>
              <li className='flex items-center text-sm text-gray-600'>
                <CheckCircle className='w-4 h-4 mr-2 text-emerald-500' />3 meals
                per day
              </li>
              <li className='flex items-center text-sm text-gray-600'>
                <CheckCircle className='w-4 h-4 mr-2 text-emerald-500' />
                Personalized menu
              </li>
              <li className='flex items-center text-sm text-gray-600'>
                <CheckCircle className='w-4 h-4 mr-2 text-emerald-500' />
                VIP support
              </li>
            </ul>
            <button className='w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors'>
              Select Plan
            </button>
          </div>
        </div>

        <div className='bg-emerald-50 rounded-xl p-6'>
          <h3 className='font-semibold text-gray-900 mb-4 flex items-center'>
            <Shield className='w-5 h-5 mr-2 text-emerald-600' />
            Current Subscription
          </h3>
          <div className='space-y-2'>
            <p className='text-sm text-gray-600'>
              Plan:{' '}
              <span className='font-semibold text-gray-900'>3 Months</span>
            </p>
            <p className='text-sm text-gray-600'>
              Renewal Date:{' '}
              <span className='font-semibold text-gray-900'>
                February 15, 2026
              </span>
            </p>
            <p className='text-sm text-gray-600'>
              Status:{' '}
              <span className='font-semibold text-green-600'>Active</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navigation />

      <div className='flex lg:pb-0 pb-20'>
        <Sidebar />

        <main className='flex-1 p-4 lg:p-8'>
          <div className='max-w-7xl mx-auto'>
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'profile' && <ProfileTab />}
            {activeTab === 'subscription' && <SubscriptionTab />}
            {activeTab === 'menu' && <MenuTab />}
            {activeTab === 'settings' && (
              <div className='bg-white rounded-xl border border-gray-200 p-6'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Settings
                </h2>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Theme
                </label>
                <select className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-500'>
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System Default</option>
                </select>

                <label className='block text-sm font-medium text-gray-700 mb-2 mt-4'>
                  Language
                </label>
                <select className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-500'>
                  <option>English</option>
                  <option>Uzbek</option>
                  <option>Russian</option>
                </select>

                <label className='block text-sm font-medium text-gray-700 mb-2 mt-4'>
                  Notification Preferences
                </label>
                <select className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-500'>
                  <option>All Notifications</option>
                  <option>Important Only</option>
                  <option>None</option>
                </select>
              </div>
            )}
          </div>
        </main>
      </div>

      <div className='lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3'>
        <div className='flex justify-around'>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center  ${
              activeTab === 'dashboard' ? 'text-emerald-600' : 'text-gray-400'
            }`}
          >
            <Calendar className='w-6 h-6' />
            <span className='text-xs mt-1'>Home</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center  ${
              activeTab === 'profile' ? 'text-emerald-600' : 'text-gray-400'
            }`}
          >
            <User className='w-6 h-6' />
            <span className='text-xs mt-1'>Profile</span>
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`flex flex-col items-center  ${
              activeTab === 'menu' ? 'text-emerald-600' : 'text-gray-400'
            }`}
          >
            <FileText className='w-6 h-6' />
            <span className='text-xs mt-1'>Menu</span>
          </button>
          <button
            onClick={() => setActiveTab('subscription')}
            className={`flex flex-col items-center  ${
              activeTab === 'subscription'
                ? 'text-emerald-600'
                : 'text-gray-400'
            }`}
          >
            <CreditCard className='w-6 h-6' />
            <span className='text-xs mt-1'>Plans</span>
          </button>
        </div>
      </div>
    </div>
  )
}
