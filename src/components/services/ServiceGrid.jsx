import React, { useState } from 'react';
import { Search, Stethoscope, Sparkles } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal';
import { allServices } from '../../data/services';

export const ServiceGrid = ({ limit, showSearch = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const filteredServices = allServices.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;
  const conditions = displayedServices.filter((s) => s.category === 'condition');
  const techniques = displayedServices.filter((s) => s.category === 'technique');

  return (
    <div className="space-y-10">
      {/* Category Tabs & Search Bar */}
      {showSearch && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-b thin-line-separator">
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none font-body">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#1B8480] text-white shadow-sm'
                  : 'bg-white text-[#4D5255] hover:bg-[#1B8480]/10 border border-gray-200'
              }`}
            >
              All Treatments ({allServices.length})
            </button>
            <button
              onClick={() => setSelectedCategory('condition')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === 'condition'
                  ? 'bg-[#1B8480] text-white shadow-sm'
                  : 'bg-white text-[#4D5255] hover:bg-[#1B8480]/10 border border-gray-200'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              Conditions ({allServices.filter(s => s.category === 'condition').length})
            </button>
            <button
              onClick={() => setSelectedCategory('technique')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === 'technique'
                  ? 'bg-[#1B8480] text-white shadow-sm'
                  : 'bg-white text-[#4D5255] hover:bg-[#1B8480]/10 border border-gray-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Techniques ({allServices.filter(s => s.category === 'technique').length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search condition or treatment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm font-body rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1B8480] transition-all"
            />
          </div>
        </div>
      )}

      {/* List Layout */}
      {displayedServices.length === 0 ? (
        <div className="text-center py-16 bg-white border border-dashed border-gray-300">
          <p className="font-body text-[#6B7280] text-sm font-medium">No treatments found matching your search query.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-3 text-xs font-bold text-[#1B8480] hover:underline"
          >
            Reset filter
          </button>
        </div>
      ) : selectedCategory === 'all' && !limit ? (
        <div className="space-y-14">
          {/* Section 1: Conditions We Help With */}
          <div>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-[#1B8480]">
              <Stethoscope className="w-5 h-5 text-[#1B8480]" />
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#1E2A38]">
                CONDITIONS WE HELP WITH
              </h3>
            </div>
            <div className="border-t thin-line-separator divide-y thin-line-separator bg-white shadow-sm">
              {conditions.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} onClick={handleCardClick} />
              ))}
            </div>
          </div>

          {/* Section 2: Treatment Techniques */}
          <div>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-[#1B8480]">
              <Sparkles className="w-5 h-5 text-[#1B8480]" />
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#1E2A38]">
                TREATMENT TECHNIQUES
              </h3>
            </div>
            <div className="border-t thin-line-separator divide-y thin-line-separator bg-white shadow-sm">
              {techniques.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} onClick={handleCardClick} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="border-t thin-line-separator divide-y thin-line-separator bg-white shadow-sm">
          {displayedServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} onClick={handleCardClick} />
          ))}
        </div>
      )}

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
