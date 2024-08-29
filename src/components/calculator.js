import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Percent, TrendingUp, Server, Users, ShoppingCart, BookOpen, Briefcase, PhoneCall, AlertCircle, Clock, BarChart2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const InputField = ({ label, value, onChange, icon: Icon, prefix, tooltip }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {tooltip && (
        <span className="ml-1 group relative">
          <span className="cursor-help text-gray-500">ⓘ</span>
          <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-48 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tooltip}
          </span>
        </span>
      )}
    </label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {prefix && <span className="text-gray-500 sm:text-sm">{prefix}</span>}
        {Icon && <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
      </div>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
        placeholder="0"
      />
    </div>
  </div>
);

const SavingsCategory = ({ icon: Icon, title, amount, percentage, suggestion }) => (
  <div className="bg-indigo-50 rounded-lg mb-4 overflow-hidden">
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Icon className="h-8 w-8 text-indigo-600 mr-3" />
        <div>
          <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
          <p className="text-sm text-indigo-600">Up to {percentage}% optimization</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-indigo-900">${amount.toLocaleString()}</p>
        <p className="text-sm text-indigo-600">Estimated Savings</p>
      </div>
    </div>
    {suggestion && (
      <div className="bg-indigo-100 p-4 border-t border-indigo-200">
        <p className="text-sm text-indigo-800"><strong>Suggestion:</strong> {suggestion}</p>
      </div>
    )}
  </div>
);

const Calculator = () => {
  const [industry, setIndustry] = useState('retail');
  const [annualRevenue, setAnnualRevenue] = useState('');
  const [operatingCosts, setOperatingCosts] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');
  const [itSpend, setItSpend] = useState('');
  const [customerAcquisitionCost, setCustomerAcquisitionCost] = useState('');
  const [inventoryTurnover, setInventoryTurnover] = useState('');
  const [avgEmployeeSalary, setAvgEmployeeSalary] = useState('');
  const [customerLifetimeValue, setCustomerLifetimeValue] = useState('');
  const [avgProjectDuration, setAvgProjectDuration] = useState('');
  const [savings, setSavings] = useState(null);
  const [projectedGrowth, setProjectedGrowth] = useState([]);

  const industryIcons = {
    retail: ShoppingCart,
    education: BookOpen,
    finance: Briefcase,
    service: PhoneCall
  };

  const industryBenchmarks = {
    retail: { dataEfficiency: 15, processOptimization: 5, predictiveAnalytics: 2, employeeProductivity: 10, customerRetention: 20, inventoryManagement: 2 },
    education: { dataEfficiency: 12, processOptimization: 6, predictiveAnalytics: 3, employeeProductivity: 8, customerRetention: 15 },
    finance: { dataEfficiency: 18, processOptimization: 7, predictiveAnalytics: 4, employeeProductivity: 9, customerRetention: 25 },
    service: { dataEfficiency: 14, processOptimization: 5, predictiveAnalytics: 2, employeeProductivity: 11, customerRetention: 22 }
  };

  const calculateSavings = () => {
    if (annualRevenue && operatingCosts && employeeCount && itSpend && customerAcquisitionCost && avgEmployeeSalary && customerLifetimeValue && avgProjectDuration) {
      const revenue = parseFloat(annualRevenue);
      const costs = parseFloat(operatingCosts);
      const employees = parseFloat(employeeCount);
      const it = parseFloat(itSpend);
      const cac = parseFloat(customerAcquisitionCost);
      const inventory = parseFloat(inventoryTurnover) || 0;
      const avgSalary = parseFloat(avgEmployeeSalary);
      const clv = parseFloat(customerLifetimeValue);
      const projectDuration = parseFloat(avgProjectDuration);

      const benchmarks = industryBenchmarks[industry];

      const dataEfficiencySavings = it * (benchmarks.dataEfficiency / 100);
      const processOptimizationSavings = costs * (benchmarks.processOptimization / 100);
      const predictiveAnalyticsSavings = revenue * (benchmarks.predictiveAnalytics / 100);
      const employeeProductivitySavings = avgSalary * employees * (benchmarks.employeeProductivity / 100);
      const customerRetentionSavings = (clv - cac) * (revenue / cac) * (benchmarks.customerRetention / 100);
      const inventoryManagementSavings = industry === 'retail' ? (costs * (benchmarks.inventoryManagement / 100) * inventory) : 0;

      const totalSavings = dataEfficiencySavings + processOptimizationSavings + predictiveAnalyticsSavings + 
                           employeeProductivitySavings + customerRetentionSavings + inventoryManagementSavings;

      setSavings({
        dataEfficiency: { amount: dataEfficiencySavings, percentage: benchmarks.dataEfficiency },
        processOptimization: { amount: processOptimizationSavings, percentage: benchmarks.processOptimization },
        predictiveAnalytics: { amount: predictiveAnalyticsSavings, percentage: benchmarks.predictiveAnalytics },
        employeeProductivity: { amount: employeeProductivitySavings, percentage: benchmarks.employeeProductivity },
        customerRetention: { amount: customerRetentionSavings, percentage: benchmarks.customerRetention },
        inventoryManagement: { amount: inventoryManagementSavings, percentage: benchmarks.inventoryManagement || 0 },
        total: totalSavings
      });

      // Calculate projected growth
      const growthRate = 1 + (totalSavings / revenue);
      const projectedRevenueData = [{ year: 'Current', revenue }];
      for (let i = 1; i <= 5; i++) {
        projectedRevenueData.push({
          year: `Year ${i}`,
          revenue: revenue * Math.pow(growthRate, i)
        });
      }
      setProjectedGrowth(projectedRevenueData);
    }
  };

  useEffect(() => {
    calculateSavings();
  }, [annualRevenue, operatingCosts, employeeCount, itSpend, customerAcquisitionCost, inventoryTurnover, avgEmployeeSalary, customerLifetimeValue, avgProjectDuration, industry]);

  const suggestions = {
    dataEfficiency: "Implement advanced data analytics tools to streamline data processing and improve decision-making speed.",
    processOptimization: "Automate repetitive tasks and redesign workflows to eliminate bottlenecks and reduce operational costs.",
    predictiveAnalytics: "Utilize AI-driven predictive models to forecast market trends and optimize pricing strategies.",
    employeeProductivity: "Invest in employee training programs and implement productivity-enhancing technologies.",
    customerRetention: "Develop a data-driven customer engagement strategy to improve satisfaction and reduce churn.",
    inventoryManagement: "Implement an AI-powered inventory management system to optimize stock levels and reduce carrying costs."
  };

  return (
    <div className="max-w-6xl my-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Comprehensive Cost Savings and Insights Calculator</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="retail">Retail</option>
          <option value="education">Education</option>
          <option value="finance">Finance</option>
          <option value="service">Service</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InputField
          label="Annual Revenue"
          value={annualRevenue}
          onChange={(e) => setAnnualRevenue(e.target.value)}
          icon={DollarSign}
          prefix="$"
          tooltip="Your company's total annual revenue"
        />
        <InputField
          label="Annual Operating Costs"
          value={operatingCosts}
          onChange={(e) => setOperatingCosts(e.target.value)}
          icon={DollarSign}
          prefix="$"
          tooltip="Total yearly costs to run your business"
        />
        <InputField
          label="Number of Employees"
          value={employeeCount}
          onChange={(e) => setEmployeeCount(e.target.value)}
          icon={Users}
          tooltip="Total number of full-time employees"
        />
        <InputField
          label="Annual IT Spend"
          value={itSpend}
          onChange={(e) => setItSpend(e.target.value)}
          icon={Server}
          prefix="$"
          tooltip="Yearly budget for IT infrastructure and services"
        />
        <InputField
          label="Customer Acquisition Cost"
          value={customerAcquisitionCost}
          onChange={(e) => setCustomerAcquisitionCost(e.target.value)}
          icon={DollarSign}
          prefix="$"
          tooltip="Average cost to acquire a new customer"
        />
        {industry === 'retail' && (
          <InputField
            label="Inventory Turnover Rate"
            value={inventoryTurnover}
            onChange={(e) => setInventoryTurnover(e.target.value)}
            icon={ShoppingCart}
            tooltip="Number of times inventory is sold per year"
          />
        )}
        <InputField
          label="Average Employee Salary"
          value={avgEmployeeSalary}
          onChange={(e) => setAvgEmployeeSalary(e.target.value)}
          icon={DollarSign}
          prefix="$"
          tooltip="Average annual salary per employee"
        />
        <InputField
          label="Customer Lifetime Value"
          value={customerLifetimeValue}
          onChange={(e) => setCustomerLifetimeValue(e.target.value)}
          icon={DollarSign}
          prefix="$"
          tooltip="Average total revenue generated from a single customer"
        />
        <InputField
          label="Average Project Duration (months)"
          value={avgProjectDuration}
          onChange={(e) => setAvgProjectDuration(e.target.value)}
          icon={Clock}
          tooltip="Average duration of a typical project or sales cycle"
        />
      </div>

      {savings && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">Estimated Annual Savings & Suggestions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SavingsCategory
              icon={Server}
              title="Data Efficiency"
              amount={savings.dataEfficiency.amount}
              percentage={savings.dataEfficiency.percentage}
              suggestion={suggestions.dataEfficiency}
            />
            <SavingsCategory
              icon={TrendingUp}
              title="Process Optimization"
              amount={savings.processOptimization.amount}
              percentage={savings.processOptimization.percentage}
              suggestion={suggestions.processOptimization}
            />
            <SavingsCategory
              icon={Percent}
              title="Predictive Analytics"
              amount={savings.predictiveAnalytics.amount}
              percentage={savings.predictiveAnalytics.percentage}
              suggestion={suggestions.predictiveAnalytics}
            />
            <SavingsCategory
              icon={Users}
              title="Employee Productivity"
              amount={savings.employeeProductivity.amount}
              percentage={savings.employeeProductivity.percentage}
              suggestion={suggestions.employeeProductivity}
            />
            <SavingsCategory
              icon={PhoneCall}
              title="Customer Retention"
              amount={savings.customerRetention.amount}
              percentage={savings.customerRetention.percentage}
              suggestion={suggestions.customerRetention}
            />
            {industry === 'retail' && (
              <SavingsCategory
                icon={ShoppingCart}
                title="Inventory Management"
                amount={savings.inventoryManagement.amount}
                percentage={savings.inventoryManagement.percentage}
                suggestion={suggestions.inventoryManagement}
              />
            )}
          </div>
          <div className="mt-8 p-6 bg-indigo-600 rounded-lg text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">Total Estimated Annual Savings</h3>
              <p className="text-4xl font-bold">${savings.total.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6">Projected Revenue Growth</h3>
            <div className="bg-white p-4 rounded-lg shadow">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={projectedGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              This chart shows the projected revenue growth over the next 5 years, based on the estimated cost savings and efficiency improvements.
            </p>
          </div>
        </motion.div>
      )}
      
      <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h4>
            <p className="text-sm text-yellow-700">
              This calculator provides estimates based on industry benchmarks and typical results. Actual savings and growth may vary depending on various factors specific to your business. For a detailed analysis tailored to your unique situation, we recommend scheduling a consultation with our team of experts.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-indigo-900 mb-4">Ready to Maximize Your Savings?</h3>
        <p className="text-gray-600 mb-6">
          Our team of experts can provide a personalized analysis and show you how to implement these savings in your business.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition duration-300 text-lg font-semibold">
          Schedule a Free Consultation
        </button>
      </div>
      
      <div className="mt-12 border-t border-gray-200 pt-8">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <BarChart2 className="h-12 w-12 text-indigo-500 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Data Analysis</h4>
            <p className="text-gray-600">We analyze your business data to identify areas for improvement and cost savings.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TrendingUp className="h-12 w-12 text-indigo-500 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Strategy Development</h4>
            <p className="text-gray-600">Our experts develop a tailored strategy to implement the identified savings opportunities.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-indigo-500 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Implementation Support</h4>
            <p className="text-gray-600">We provide ongoing support to ensure successful implementation and maximize your ROI.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;