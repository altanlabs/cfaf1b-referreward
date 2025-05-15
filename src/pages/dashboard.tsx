import { useAuth } from '../contexts/AuthContext';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {user?.email}</h1>
        <p className="text-gray-600 mt-2">Manage your referrals and track your earnings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Active Referrals</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Earnings</h3>
          <p className="text-3xl font-bold mt-2">$0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Success Rate</h3>
          <p className="text-3xl font-bold mt-2">0%</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-8 text-center text-gray-500">
            No recent activity to display
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <button 
              onClick={() => window.location.href = '/post-job'}
              className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Post a New Job
            </button>
            <button 
              className="w-full bg-white border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Submit a Referral
            </button>
          </div>
        </div>

        {/* Recent Jobs */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Jobs</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-8 text-center text-gray-500">
              No jobs available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}