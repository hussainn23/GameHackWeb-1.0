import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

const Search = () => {
  const [apps, setApps] = useState([]);
  const [query, setQuery] = useState('');
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApps = async () => {
      const snapshot = await getDocs(collection(db, 'APK'));
      const all = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setApps(all);
    };
    fetchApps();
  }, []);

  const filtered = apps.filter(app =>
    app.Name?.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (app) => {
    navigate('/earningAppDetails', { state: { id: app.id, category: app.Category } });
    setQuery('');
    setShowInput(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
  
      <button
        onClick={() => setShowInput(!showInput)}
        className="p-2 "
      >
        <SearchIcon className="w-5 h-5 cursor-pointer " />
      </button>

      {/* Input and Results Dropdown (absolutely positioned) */}
      {showInput && (
        <div className="absolute top-12 transition-all duration-6000 ease-in-out
      opacity-100 scale-100 -left-50 w-[250px] z-50">
          <Input
            type="text"
            placeholder="Search apps..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="bg-white border border-gray-300 text-gray-700"
          />

          {query && (
            <div className="bg-white border border-gray-300 mt-1 rounded shadow-lg max-h-[250px] overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="p-2 text-sm text-muted-foreground">No results found.</div>
              ) : (
                filtered.map(app => (
                  <div
                    key={app.id}
                    onClick={() => handleSelect(app)}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={app.Logo}
                      alt={app.Name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="flex flex-col text-black">
                      <span className="font-semibold text-sm">{app.Name}</span>
                      <Badge className="w-fit mt-1 text-xs">Rating ★ {app.rating || '4.7'}</Badge>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
