// VentureScope V2 - Application Logic
// Developer: AI Assistant

// --- MOCK DATA ---
const startups = [
    { id: 1, name: 'Sarvam AI', sector: 'GenAI', stage: 'Series A', country: 'India', founded: 2023, funding: '$41M', fundingAmount: 41, description: 'Building foundational AI models for Indian languages.', investors: ['Lightspeed', 'Peak XV', 'Khosla Ventures'], employees: 45, growth: 'High', website: 'sarvam.ai', aiScore: 82 },
    { id: 2, name: 'Mistral AI', sector: 'GenAI', stage: 'Series B', country: 'France', founded: 2023, funding: '$1.1B', fundingAmount: 1100, description: 'Open-weight frontier AI models.', investors: ['Andreessen Horowitz', 'Lightspeed', 'Microsoft'], employees: 120, growth: 'Hyper', website: 'mistral.ai', aiScore: 95 },
    { id: 3, name: 'Anthropic', sector: 'GenAI', stage: 'Series C', country: 'USA', founded: 2021, funding: '$7.3B', fundingAmount: 7300, description: 'AI safety and research company, creators of Claude.', investors: ['Amazon', 'Google', 'Spark Capital'], employees: 400, growth: 'Hyper', website: 'anthropic.com', aiScore: 98 },
    { id: 4, name: 'Zepto', sector: 'QCommerce', stage: 'Series G', country: 'India', founded: 2021, funding: '$1.4B', fundingAmount: 1400, description: '10-minute grocery delivery network.', investors: ['Nexus Venture Partners', 'StepStone', 'Goodwater'], employees: 2000, growth: 'High', website: 'zeptonow.com', aiScore: 78 },
    { id: 5, name: 'Razorpay', sector: 'FinTech', stage: 'Series F', country: 'India', founded: 2014, funding: '$741M', fundingAmount: 741, description: 'Payment gateway and financial infrastructure for businesses.', investors: ['Sequoia India', 'Ribbit Capital', 'Tiger Global'], employees: 3000, growth: 'Stable', website: 'razorpay.com', aiScore: 88 },
    { id: 6, name: 'Cohere', sector: 'GenAI', stage: 'Series D', country: 'Canada', founded: 2019, funding: '$445M', fundingAmount: 445, description: 'Enterprise-focused NLP and LLM APIs.', investors: ['Inovia Capital', 'Index Ventures', 'Oracle'], employees: 250, growth: 'High', website: 'cohere.com', aiScore: 85 },
    { id: 7, name: 'Runway', sector: 'GenAI', stage: 'Series C', country: 'USA', founded: 2018, funding: '$237M', fundingAmount: 237, description: 'Applied AI research shaping the next era of art, entertainment and human creativity.', investors: ['Felicis', 'Amplify Partners', 'Lux Capital'], employees: 150, growth: 'High', website: 'runwayml.com', aiScore: 91 },
    { id: 8, name: 'Scale AI', sector: 'AI/Data', stage: 'Series F', country: 'USA', founded: 2016, funding: '$1.5B', fundingAmount: 1500, description: 'Data platform for AI, powering machine learning models.', investors: ['Founders Fund', 'Accel', 'Index Ventures'], employees: 1200, growth: 'High', website: 'scale.com', aiScore: 90 },
    { id: 9, name: 'PhysicsWallah', sector: 'EdTech', stage: 'Series B', country: 'India', founded: 2016, funding: '$100M', fundingAmount: 100, description: 'Affordable online learning platform.', investors: ['WestBridge Capital', 'GSV Ventures'], employees: 1500, growth: 'High', website: 'pw.live', aiScore: 72 },
    { id: 10, name: 'Nium', sector: 'FinTech', stage: 'Series D', country: 'Singapore', founded: 2015, funding: '$300M', fundingAmount: 300, description: 'Global payments platform.', investors: ['Vertex Ventures', 'GIC', 'Temasek'], employees: 800, growth: 'Stable', website: 'nium.com', aiScore: 75 },
    { id: 11, name: 'Darwinbox', sector: 'HRTech', stage: 'Series D', country: 'India', founded: 2015, funding: '$140M', fundingAmount: 140, description: 'Cloud-based HRMS platform.', investors: ['TCV', 'Salesforce Ventures', 'Lightspeed'], employees: 700, growth: 'High', website: 'darwinbox.com', aiScore: 68 },
    { id: 12, name: 'Groww', sector: 'FinTech', stage: 'Series E', country: 'India', founded: 2016, funding: '$393M', fundingAmount: 393, description: 'Investment platform for retail investors.', investors: ['Tiger Global', 'Peak XV', 'Y Combinator'], employees: 900, growth: 'Stable', website: 'groww.in', aiScore: 80 },
    { id: 13, name: 'Innovaccer', sector: 'HealthTech', stage: 'Series E', country: 'India', founded: 2014, funding: '$275M', fundingAmount: 275, description: 'Healthcare data platform.', investors: ['Tiger Global', 'B Capital Group', 'Mubadala'], employees: 1000, growth: 'Stable', website: 'innovaccer.com', aiScore: 71 },
    { id: 14, name: 'Tomorrow.io', sector: 'CleanTech', stage: 'Series D', country: 'USA', founded: 2016, funding: '$220M', fundingAmount: 220, description: 'Weather intelligence software.', investors: ['Stone Ridge', 'SB Energy', 'Ford'], employees: 300, growth: 'High', website: 'tomorrow.io', aiScore: 77 },
    { id: 15, name: 'Ola Krutrim', sector: 'GenAI', stage: 'Series A', country: 'India', founded: 2023, funding: '$50M', fundingAmount: 50, description: 'Full-stack AI focusing on Indian computing stack.', investors: ['Matrix Partners'], employees: 150, growth: 'High', website: 'olakrutrim.com', aiScore: 65 },
    { id: 16, name: 'Vercel', sector: 'SaaS', stage: 'Series E', country: 'USA', founded: 2015, funding: '$313M', fundingAmount: 313, description: 'Frontend cloud platform, creators of Next.js.', investors: ['Accel', 'CRV', 'GV'], employees: 500, growth: 'High', website: 'vercel.com', aiScore: 86 },
    { id: 17, name: 'Replit', sector: 'GenAI', stage: 'Series B', country: 'USA', founded: 2016, funding: '$222M', fundingAmount: 222, description: 'AI-powered collaborative IDE.', investors: ['Andreessen Horowitz', 'Coatue', 'Y Combinator'], employees: 100, growth: 'High', website: 'replit.com', aiScore: 89 },
    { id: 18, name: 'Slice', sector: 'FinTech', stage: 'Series C', country: 'India', founded: 2016, funding: '$220M', fundingAmount: 220, description: 'Credit card challenger for millennials.', investors: ['Tiger Global', 'Insight Partners'], employees: 600, growth: 'Stable', website: 'sliceit.com', aiScore: 62 },
    { id: 19, name: 'Lenskart', sector: 'RetailTech', stage: 'Series F', country: 'India', founded: 2010, funding: '$600M', fundingAmount: 600, description: 'Omnichannel eyewear retailer.', investors: ['SoftBank', 'Kedaara Capital', 'PremjiInvest'], employees: 5000, growth: 'Stable', website: 'lenskart.com', aiScore: 60 },
    { id: 20, name: 'Airtable', sector: 'SaaS', stage: 'Series F', country: 'USA', founded: 2012, funding: '$1.4B', fundingAmount: 1400, description: 'Low-code platform for building collaborative apps.', investors: ['Benchmark', 'CRV', 'Thrive Capital'], employees: 1000, growth: 'Stable', website: 'airtable.com', aiScore: 84 },
    { id: 21, name: 'Stability AI', sector: 'GenAI', stage: 'Series B', country: 'UK', founded: 2021, funding: '$101M', fundingAmount: 101, description: 'Open-source generative AI company (Stable Diffusion).', investors: ['Coatue', 'Lightspeed'], employees: 150, growth: 'Moderate', website: 'stability.ai', aiScore: 76 },
    { id: 22, name: 'InMobi', sector: 'AdTech', stage: 'Public', country: 'India', founded: 2007, funding: '$320M', fundingAmount: 320, description: 'Mobile advertising platform.', investors: ['SoftBank', 'Kleiner Perkins'], employees: 2500, growth: 'Stable', website: 'inmobi.com', aiScore: 55 },
    { id: 23, name: 'Fampay', sector: 'FinTech', stage: 'Series A', country: 'India', founded: 2019, funding: '$38M', fundingAmount: 38, description: 'Neobank for teenagers.', investors: ['Elevation Capital', 'Sequoia India'], employees: 200, growth: 'High', website: 'fampay.in', aiScore: 48 },
    { id: 24, name: 'Meesho', sector: 'E-Commerce', stage: 'Series E', country: 'India', founded: 2015, funding: '$975M', fundingAmount: 975, description: 'Social commerce platform.', investors: ['Fidelity', 'B Capital', 'SoftBank'], employees: 2000, growth: 'High', website: 'meesho.com', aiScore: 69 },
    { id: 25, name: 'Delhivery', sector: 'Logistics', stage: 'Public', country: 'India', founded: 2011, funding: '$1.1B', fundingAmount: 1100, description: 'Supply chain and logistics provider.', investors: ['SoftBank', 'Carlyle', 'Fosun'], employees: 10000, growth: 'Stable', website: 'delhivery.com', aiScore: 45 }
];

// --- STATE ---
const state = {
    data: startups,
    filteredData: startups,
    watchlist: JSON.parse(localStorage.getItem('venturescope_watchlist') || '[]'),
    activeTab: 'all', // all, watchlist
    currentPage: 1,
    itemsPerPage: 10,
    sortCol: null,
    sortDesc: false,
    filters: {
        sectors: new Set(),
        stages: new Set(),
        countries: new Set()
    },
    searchQuery: '',
    selectedCompanyId: null
};

// --- DOM ELEMENTS ---
const elements = {
    tableBody: document.getElementById('companies-tbody'),
    searchInput: document.getElementById('global-search'),
    tabs: document.querySelectorAll('.tab-btn'),
    
    // Filters
    sectorList: document.getElementById('filter-sector-list'),
    stageList: document.getElementById('filter-stage-list'),
    countryList: document.getElementById('filter-country-list'),
    clearFiltersBtn: document.getElementById('clear-filters-btn'),
    
    // Pagination
    pageInfo: document.getElementById('page-info'),
    pageNumbers: document.getElementById('page-numbers'),
    prevBtn: document.getElementById('prev-page-btn'),
    nextBtn: document.getElementById('next-page-btn'),
    emptyState: document.getElementById('empty-state'),
    tableEl: document.getElementById('companies-table'),
    resetSearchBtn: document.getElementById('reset-search-btn'),
    
    // Sorting
    sortHeaders: document.querySelectorAll('th.sortable'),
    
    // Panels & Modals
    companyPanel: document.getElementById('company-panel'),
    panelOverlay: document.getElementById('panel-overlay'),
    closePanelBtn: document.getElementById('close-panel-btn'),
    
    apiModal: document.getElementById('api-modal'),
    apiKeyBtn: document.getElementById('api-key-btn'),
    closeApiModal: document.getElementById('close-api-modal'),
    apiKeyInput: document.getElementById('api-key-input'),
    saveApiKeyBtn: document.getElementById('save-api-key-btn'),
    
    aiModal: document.getElementById('ai-modal'),
    navAiAnalyst: document.getElementById('nav-ai-analyst'),
    closeAiModal: document.getElementById('close-ai-modal'),
    chatMessages: document.getElementById('chat-messages'),
    chatInput: document.getElementById('chat-input'),
    sendChatBtn: document.getElementById('send-chat-btn'),
    askAiCompanyBtn: document.getElementById('ask-ai-company-btn'),
    
    exportBtn: document.getElementById('export-btn')
};

// --- INITIALIZATION ---
function init() {
    populateFilters();
    bindEvents();
    applyFiltersAndRender();
}

// --- RENDERING ---
function renderTable() {
    elements.tableBody.innerHTML = '';
    
    if (state.filteredData.length === 0) {
        elements.tableEl.style.display = 'none';
        elements.emptyState.classList.remove('hidden');
        renderPagination();
        return;
    }
    
    elements.tableEl.style.display = 'table';
    elements.emptyState.classList.add('hidden');
    
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    const pageData = state.filteredData.slice(startIndex, endIndex);
    
    pageData.forEach(company => {
        const isWatchlisted = state.watchlist.includes(company.id);
        const scoreClass = company.aiScore > 75 ? 'score-green' : (company.aiScore >= 50 ? 'score-amber' : 'score-red');
        
        const tr = document.createElement('tr');
        tr.dataset.id = company.id;
        
        tr.innerHTML = `
            <td class="action-cell" onclick="event.stopPropagation(); toggleWatchlist(${company.id}, this)">
                <button class="icon-btn star-btn ${isWatchlisted ? 'active' : ''}">${isWatchlisted ? '★' : '☆'}</button>
            </td>
            <td>
                <strong>${company.name}</strong>
                <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${company.website}</div>
            </td>
            <td><span class="badge">${company.sector}</span></td>
            <td>${company.stage}</td>
            <td>${company.funding}</td>
            <td>${company.country}</td>
            <td>${company.founded}</td>
            <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div class="score-bar-container">
                        <div class="score-bar ${scoreClass}" style="width: ${company.aiScore}%"></div>
                    </div>
                    <span style="font-size: 12px;">${company.aiScore}</span>
                </div>
            </td>
            <td>
                <button class="btn btn-ghost" style="padding: 4px 8px; font-size: 12px;">View</button>
            </td>
        `;
        
        tr.addEventListener('click', () => openCompanyDetail(company));
        elements.tableBody.appendChild(tr);
    });
    
    renderPagination();
}

function renderPagination() {
    const totalItems = state.filteredData.length;
    const totalPages = Math.ceil(totalItems / state.itemsPerPage);
    
    if (totalItems === 0) {
        elements.pageInfo.textContent = 'No companies found';
        elements.pageNumbers.innerHTML = '';
        elements.prevBtn.disabled = true;
        elements.nextBtn.disabled = true;
        return;
    }
    
    const start = (state.currentPage - 1) * state.itemsPerPage + 1;
    const end = Math.min(start + state.itemsPerPage - 1, totalItems);
    elements.pageInfo.textContent = `Showing ${start}-${end} of ${totalItems}`;
    
    elements.prevBtn.disabled = state.currentPage === 1;
    elements.nextBtn.disabled = state.currentPage === totalPages;
    
    // Generate page numbers
    elements.pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        // Simple logic for small number of pages
        const btn = document.createElement('button');
        btn.className = `page-num ${i === state.currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.addEventListener('click', () => {
            state.currentPage = i;
            renderTable();
        });
        elements.pageNumbers.appendChild(btn);
    }
}

// --- FILTERING & SORTING ---
function populateFilters() {
    const sectors = [...new Set(startups.map(c => c.sector))].sort();
    const stages = [...new Set(startups.map(c => c.stage))].sort();
    const countries = [...new Set(startups.map(c => c.country))].sort();
    
    const createCheckboxes = (items, container, filterSet) => {
        container.innerHTML = '';
        items.forEach(item => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.value = item;
            input.addEventListener('change', (e) => {
                if (e.target.checked) filterSet.add(item);
                else filterSet.delete(item);
                
                state.currentPage = 1;
                applyFiltersAndRender();
            });
            
            label.appendChild(input);
            label.appendChild(document.createTextNode(item));
            container.appendChild(label);
        });
    };
    
    createCheckboxes(sectors, elements.sectorList, state.filters.sectors);
    createCheckboxes(stages, elements.stageList, state.filters.stages);
    createCheckboxes(countries, elements.countryList, state.filters.countries);
}

function applyFiltersAndRender() {
    let result = state.data;
    
    // 1. Tab filter
    if (state.activeTab === 'watchlist') {
        result = result.filter(c => state.watchlist.includes(c.id));
    }
    
    // 2. Search filter
    if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        result = result.filter(c => 
            c.name.toLowerCase().includes(q) || 
            c.sector.toLowerCase().includes(q) ||
            c.description.toLowerCase().includes(q)
        );
    }
    
    // 3. Checkbox filters (AND across groups, OR within groups)
    if (state.filters.sectors.size > 0) {
        result = result.filter(c => state.filters.sectors.has(c.sector));
    }
    if (state.filters.stages.size > 0) {
        result = result.filter(c => state.filters.stages.has(c.stage));
    }
    if (state.filters.countries.size > 0) {
        result = result.filter(c => state.filters.countries.has(c.country));
    }
    
    // 4. Sorting
    if (state.sortCol) {
        result.sort((a, b) => {
            let valA = a[state.sortCol];
            let valB = b[state.sortCol];
            
            if (typeof valA === 'string') valA = valA.toLowerCase();
            if (typeof valB === 'string') valB = valB.toLowerCase();
            
            if (valA < valB) return state.sortDesc ? 1 : -1;
            if (valA > valB) return state.sortDesc ? -1 : 1;
            return 0;
        });
    }
    
    state.filteredData = result;
    
    // Update total pages check
    const totalPages = Math.max(1, Math.ceil(result.length / state.itemsPerPage));
    if (state.currentPage > totalPages) state.currentPage = totalPages;
    
    renderTable();
}

function handleSort(col) {
    if (state.sortCol === col) {
        state.sortDesc = !state.sortDesc; // toggle
    } else {
        state.sortCol = col;
        state.sortDesc = false; // default asc
    }
    
    // Update UI indicators
    elements.sortHeaders.forEach(th => {
        const indicator = th.querySelector('.sort-indicator');
        indicator.textContent = '';
        if (th.dataset.sort === state.sortCol) {
            indicator.textContent = state.sortDesc ? ' ↓' : ' ↑';
        }
    });
    
    applyFiltersAndRender();
}

// --- WATCHLIST ---
function toggleWatchlist(companyId, btnElement) {
    const idx = state.watchlist.indexOf(companyId);
    if (idx > -1) {
        state.watchlist.splice(idx, 1);
    } else {
        state.watchlist.push(companyId);
    }
    
    localStorage.setItem('venturescope_watchlist', JSON.stringify(state.watchlist));
    
    // If we are in the watchlist tab, remove the row or refresh
    if (state.activeTab === 'watchlist') {
        applyFiltersAndRender();
    } else if (btnElement) {
        // Just update icon if not re-rendering entire table
        const icon = btnElement.querySelector('.star-btn');
        icon.classList.toggle('active');
        icon.textContent = state.watchlist.includes(companyId) ? '★' : '☆';
    }
}

// --- DETAILS PANEL ---
function openCompanyDetail(company) {
    state.selectedCompanyId = company.id;
    
    document.getElementById('detail-name').textContent = company.name;
    document.getElementById('detail-stage').textContent = company.stage;
    document.getElementById('detail-description').textContent = company.description;
    document.getElementById('detail-funding').textContent = company.funding;
    document.getElementById('detail-founded').textContent = company.founded;
    document.getElementById('detail-location').textContent = company.country;
    document.getElementById('detail-employees').textContent = company.employees + '+';
    
    // Investors list
    const investorsUl = document.getElementById('detail-investors');
    investorsUl.innerHTML = company.investors.map(inv => `<li>${inv}</li>`).join('');
    
    // Score
    const scoreBar = document.getElementById('detail-score-bar');
    const scoreClass = company.aiScore > 75 ? 'score-green' : (company.aiScore >= 50 ? 'score-amber' : 'score-red');
    scoreBar.className = `score-bar ${scoreClass}`;
    scoreBar.style.width = `${company.aiScore}%`;
    document.getElementById('detail-score-text').textContent = `${company.aiScore}/100`;
    
    elements.companyPanel.classList.add('open');
    elements.panelOverlay.classList.add('open');
}

function closePanels() {
    elements.companyPanel.classList.remove('open');
    elements.aiModal.classList.remove('open');
    elements.apiModal.classList.remove('open');
    elements.panelOverlay.classList.remove('open');
}

// --- AI CHAT / GROQ API ---
function openAiModal(initialMsg = null) {
    elements.aiModal.classList.add('open');
    
    if (initialMsg) {
        elements.chatInput.value = initialMsg;
        // Optionally auto-send
    }
    
    setTimeout(() => elements.chatInput.focus(), 100);
}

function appendMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    div.textContent = text;
    elements.chatMessages.appendChild(div);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

async function handleAiChat() {
    const text = elements.chatInput.value.trim();
    if (!text) return;
    
    const apiKey = localStorage.getItem('groq_api_key');
    if (!apiKey) {
        elements.apiModal.classList.add('open');
        return;
    }
    
    appendMessage(text, true);
    elements.chatInput.value = '';
    
    // Add loading placeholder
    const loadingId = 'loading-' + Date.now();
    const loadingDiv = document.createElement('div');
    loadingDiv.id = loadingId;
    loadingDiv.className = 'message ai-message';
    loadingDiv.textContent = 'Thinking...';
    elements.chatMessages.appendChild(loadingDiv);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    
    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    { role: 'system', content: 'You are a startup analyst assistant with expertise in VC investing, startup ecosystems, and market trends. Answer questions concisely with specific data points. When mentioning companies, refer to their actual metrics.' },
                    { role: 'user', content: text }
                ]
            })
        });
        
        const data = await response.json();
        document.getElementById(loadingId).remove();
        
        if (response.ok) {
            appendMessage(data.choices[0].message.content);
        } else {
            appendMessage(`Error: ${data.error?.message || 'Failed to fetch'}`);
        }
    } catch (err) {
        document.getElementById(loadingId).remove();
        appendMessage(`Network Error: Make sure your API key is correct and you have internet access.`);
        console.error(err);
    }
}

// --- EXPORT CSV ---
function exportCSV() {
    if (state.filteredData.length === 0) {
        alert('No data to export');
        return;
    }
    
    const headers = ['Company', 'Sector', 'Stage', 'Country', 'Founded', 'Funding', 'Description', 'AI Score'];
    const rows = state.filteredData.map(c => [
        `"${c.name}"`, `"${c.sector}"`, `"${c.stage}"`, `"${c.country}"`, 
        c.founded, `"${c.funding}"`, `"${c.description.replace(/"/g, '""')}"`, c.aiScore
    ]);
    
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'venturescope_export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// --- EVENTS BINDING ---
function bindEvents() {
    // Search
    elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        state.currentPage = 1;
        applyFiltersAndRender();
    });
    
    elements.resetSearchBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.searchQuery = '';
        state.filters.sectors.clear();
        state.filters.stages.clear();
        state.filters.countries.clear();
        
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        
        state.currentPage = 1;
        applyFiltersAndRender();
    });
    
    // Tabs
    elements.tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            elements.tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            state.activeTab = e.target.dataset.tab;
            // For 'recent', just treat as all for this mock
            if(state.activeTab === 'recent') state.activeTab = 'all'; 
            
            state.currentPage = 1;
            applyFiltersAndRender();
        });
    });
    
    // Pagination
    elements.prevBtn.addEventListener('click', () => {
        if (state.currentPage > 1) {
            state.currentPage--;
            renderTable();
        }
    });
    
    elements.nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(state.filteredData.length / state.itemsPerPage);
        if (state.currentPage < totalPages) {
            state.currentPage++;
            renderTable();
        }
    });
    
    // Sorting
    elements.sortHeaders.forEach(th => {
        th.addEventListener('click', () => handleSort(th.dataset.sort));
    });
    
    // Clear Filters
    elements.clearFiltersBtn.addEventListener('click', () => {
        state.filters.sectors.clear();
        state.filters.stages.clear();
        state.filters.countries.clear();
        
        // Uncheck all boxes in DOM
        document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });
        
        state.currentPage = 1;
        applyFiltersAndRender();
    });
    
    // Export
    elements.exportBtn.addEventListener('click', exportCSV);
    
    // Modals & Panels Close
    elements.closePanelBtn.addEventListener('click', closePanels);
    elements.panelOverlay.addEventListener('click', closePanels);
    elements.closeApiModal.addEventListener('click', () => elements.apiModal.classList.remove('open'));
    elements.closeAiModal.addEventListener('click', () => elements.aiModal.classList.remove('open'));
    
    // API Key setup
    elements.apiKeyBtn.addEventListener('click', () => {
        const existingKey = localStorage.getItem('groq_api_key');
        if (existingKey) elements.apiKeyInput.value = existingKey;
        elements.apiModal.classList.add('open');
    });
    
    elements.saveApiKeyBtn.addEventListener('click', () => {
        const val = elements.apiKeyInput.value.trim();
        if (val) {
            localStorage.setItem('groq_api_key', val);
            elements.apiModal.classList.remove('open');
            // If they were trying to chat, maybe open chat now? keeps it simple for now
        }
    });
    
    // AI Chat Triggers
    elements.navAiAnalyst.addEventListener('click', (e) => {
        e.preventDefault();
        openAiModal();
    });
    
    elements.askAiCompanyBtn.addEventListener('click', () => {
        const comp = state.data.find(c => c.id === state.selectedCompanyId);
        if (comp) {
            closePanels();
            openAiModal(`Analyze ${comp.name} in the ${comp.sector} space. What are their potential advantages based on their $${comp.fundingAmount}M funding and ${comp.stage} stage?`);
        }
    });
    
    // AI Chat Actions
    elements.sendChatBtn.addEventListener('click', handleAiChat);
    elements.chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAiChat();
        }
    });
    
    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        // Ignore shortcuts if user is typing in an input (unless it's Esc)
        const isInputFocus = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
        
        if (e.key === 'Escape') {
            closePanels();
        } else if (e.key === '/' && !isInputFocus) {
            e.preventDefault();
            elements.searchInput.focus();
        } else if (e.key.toLowerCase() === 'w' && !isInputFocus && state.selectedCompanyId && elements.companyPanel.classList.contains('open')) {
            toggleWatchlist(state.selectedCompanyId);
            // Refresh detail view UI slightly or table? Just re-render table behind
            applyFiltersAndRender();
        }
    });
}

// Start app
init();
