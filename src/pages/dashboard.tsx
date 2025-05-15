import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  CurrencyDollarIcon,
  ChartPieIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

// Navigation items for the sidebar
const navigation = [
  { name: 'Overview', icon: ChartBarIcon, href: '#overview' },
  { name: 'Referrals', icon: UserGroupIcon, href: '#referrals' },
  { name: 'Rewards', icon: CurrencyDollarIcon, href: '#rewards' },
  { name: 'Analytics', icon: ChartPieIcon, href: '#analytics' },
];

// Mock data for the dashboard
const mockStats = {
  totalReferrals: 25,
  activeReferrals: 8,
  successfulPlacements: 12,
  totalEarnings: 24000,
};

const mockRecentReferrals = [
  {
    id: 1,
    candidate: 'John Smith',
    position: 'Senior Developer',
    company: 'Tech Corp',
    status: 'Interviewing',
    date: '2024-02-15',
  },
  // Add more mock referrals as needed
];

export default function DashboardPage() {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white shadow-lg`}>
        <div className="p-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full bg-black text-white p-2 rounded-lg mb-4"
          >
            {sidebarOpen ? 'Collapse' : 'Expand'}
          </button>
          <nav className="space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <item.icon className="h-6 w-6" />
                {sidebarOpen && <span className="ml-3">{item.name}</span>}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Welcome, {user?.email}</h1>
            <p className="text-gray-600">Here's your referral activity overview</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm">Total Referrals</h3>
                <DocumentTextIcon className="h-6 w-6 text-blue-500" />
              </div>
              <p className="text-2xl font-bold mt-2">{mockStats.totalReferrals}</p>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                <span>12% increase</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm">Active Referrals</h3>
                <UserGroupIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <p className="text-2xl font-bold mt-2">{mockStats.activeReferrals}</p>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                <span>3 new this week</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm">Successful Placements</h3>
                <ChartBarIcon className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-2xl font-bold mt-2">{mockStats.successfulPlacements}</p>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                <span>48% success rate</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm">Total Earnings</h3>
                <CurrencyDollarIcon className="h-6 w-6 text-purple-500" />
              </div>
              <p className="text-2xl font-bold mt-2">${mockStats.totalEarnings.toLocaleString()}</p>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                <span>$5,000 this month</span>
              </div>
            </div>
          </div>

          {/* Recent Referrals Table */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Referrals</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Candidate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockRecentReferrals.map((referral) => (
                    <tr key={referral.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {referral.candidate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {referral.position}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {referral.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {referral.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {referral.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Submit New Referral
                </button>
                <button className="w-full border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  View All Referrals
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Pending Rewards</h2>
              <div className="text-center py-8 text-gray-500">
                No pending rewards at this time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}