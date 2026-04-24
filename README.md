# Quantum Speedup Is Hard: Conference Presentation

A comprehensive, interactive presentation on quantum computing speedup, from famous algorithms to variational quantum neural networks in the NISQ era, including quantum utility concepts.

## 🎯 Abstract

Quantum computing is often introduced through landmark algorithms such as Shor's factoring and Grover's search, creating the impression that quantum advantage is broadly exponential. In practice, however, most widely applicable quantum speedups are quadratic, while exponential improvements are rare and typically depend on strong assumptions or fault-tolerant hardware. This presentation provides a concise and realistic overview of what "speedup" means in quantum computing, which algorithms offer genuine advantages, and why achieving exponential speedup requires thinking in a fundamentally quantum-native way.

The second half of the presentation focuses on the NISQ era, where hybrid quantum–classical strategies dominate. We introduce variational quantum algorithms as a practical framework, and explain how parameterized quantum circuits naturally connect to quantum neural networks (QNNs). Finally, we discuss key challenges such as trainability, barren plateaus, and problem–encoding bottlenecks, and highlight why variational methods remain one of the most promising directions for near-term quantum machine learning.

## ✨ Features

✅ **Interactive hardware development chart** with 6 companies (IBM, Google, IonQ, D-Wave, Rigetti, Atom Computing)  
✅ **Beautiful timeline visualization** of quantum computing history from 1900s to 2023+  
✅ **Color-coded algorithm bubbles** (exponential, quadratic, problem-specific, emerging)  
✅ **Complete 16-slide structure** following the conference outline  
✅ **Professional styling** with quantum-themed colors  
✅ **Ready-to-use HTML presentation** (just open in browser)  

## 📋 Presentation Contents

### Part 1: Historical Context & Hardware Reality

1. **Title Slide** - Introduction with subtitle on Quantum Utility
2. **Timeline (Part 1)** - From Quantum Mechanics (Planck, Einstein, Heisenberg) to Shor's Algorithm
3. **Timeline (Part 2)** - Grover's Algorithm through Quantum Utility era
4. **Hardware Development Chart** - Interactive visualization with:
   - Logarithmic scale showing qubit growth
   - 6 major companies tracked over time
   - NISQ era, Quantum Supremacy, and Quantum Utility milestones marked
5. **Beyond Qubit Count** - What really matters: gate fidelity, coherence, error rates, topology

### Part 2: Algorithms & Quantum Utility

6. **Algorithm Bubble Diagram** - Visual categorization:
   - 🔴 **Exponential Speedup**: Shor's, Quantum Simulation, HHL
   - 🟡 **Quadratic Speedup**: Grover's Search
   - 🔵 **Problem-Specific**: QAOA, VQE, Quantum Annealing
   - 🟢 **Emerging**: QNNs, Quantum Reservoirs
7. **Quantum Utility Framework** - Three-tier system:
   - Quantum Supremacy/Advantage (2019)
   - **Quantum Utility (2023+)** ← Current Focus
   - Practical Quantum Advantage (Future)

### Part 3: NISQ Era

8. **NISQ Characteristics** - Current state of quantum computing
9. **NISQ Achievements & Direction** - What we've done and where we're going

### Part 4: Variational Algorithms & Applications

10. **Variational Paradigm** - Quantum-classical loop with QAOA, VQE, QNNs
11. **Hybrid Applications** - Neural Networks, Optimization, Simulation, Reservoir Computing
12. **Quantum Annealing** - Alternative approach with D-Wave (includes section for your research)

### Part 5: Challenges & Conclusions

13. **Key Challenges** - Barren Plateaus, Trainability, Problem Encoding, Expressibility
14. **Why Variational Methods Matter** - 6 reasons with checkmarks
15. **Key Takeaways** - 7 numbered conclusions
16. **Future Outlook & Questions** - Where the field is heading

## 🚀 How to Use

### View the Presentation

1. **Clone or download** this repository
2. **Open `index.html`** in any modern web browser (Chrome, Firefox, Safari, Edge)
3. The presentation will load automatically with all interactive features

### Navigation

- **Arrow keys** (←/→) or **Space bar**: Navigate between slides
- **ESC**: Overview mode (see all slides)
- **F**: Fullscreen mode
- **?**: Help menu with all keyboard shortcuts
- **Home/End**: Jump to first/last slide

### Online Deployment

You can easily deploy this presentation using GitHub Pages:

1. Go to your repository **Settings**
2. Navigate to **Pages** section
3. Under "Source", select **main** branch
4. Click **Save**
5. Your presentation will be available at: `https://rusnakrenata.github.io/quantum-speedup-presentation/`

## ✏️ Customization

### Add Your Information

Edit `index.html` and replace the placeholders:

- **Slide 1** (lines 24-26): Your name, affiliation, conference details
- **Slide 12** (line 421): Add your quantum annealing research
- **Slide 16** (line 588): Your contact information

### Modify Content

**Timeline**: Edit slides 2-3 to add/remove milestones  
**Hardware Data**: Update `script.js` (lines 46-119) to add new quantum computers  
**Algorithms**: Modify slide 6 to adjust bubble sizes and positions  
**Styling**: Edit `style.css` to change colors, fonts, or layout  

### Color Scheme

The presentation uses quantum-themed colors defined in `style.css`:

```css
--primary-blue: #3b82f6    /* Main theme, NISQ era */
--dark-blue: #1e3a8a       /* Backgrounds, emphasis */
--accent-yellow: #fbbf24   /* Quantum utility, highlights */
--success-green: #10b981   /* Achievements, success */
--danger-red: #ef4444      /* Exponential speedup (rare) */
```

## 📊 Interactive Hardware Chart

The chart on slide 4 shows quantum computing progress from 2010-2024:

### Companies Tracked

- **IBM**: 5 (2016) → 1,121 qubits (2023)
- **Google**: Sycamore (53-72 qubits)
- **IonQ**: Trapped ion systems (32-35 qubits)
- **D-Wave**: Quantum annealing (128 → 5,000 qubits)
- **Rigetti**: Superconducting systems (19-80 qubits)
- **Atom Computing**: Neutral atoms (1,000 qubits in 2023)

### Features

- **Logarithmic Y-axis**: Shows exponential growth clearly
- **Annotations**: Vertical lines mark Quantum Supremacy (2019) and Utility era (2023)
- **Tooltips**: Hover over points to see details
- **Legend**: Color-coded by company

## 🎨 Visual Design

### Layout Principles

- **Color-coded by concept**: Blue (primary/NISQ), Yellow (utility/important), Red (exponential/rare), Green (success/achievement)
- **Interactive elements**: Bubbles scale on hover, chart has tooltips
- **Clean typography**: Modern sans-serif with clear hierarchy
- **Proper spacing**: Generous whitespace for readability
- **Gradient backgrounds**: Title and conclusion slides for emphasis

### Responsive Design

The presentation automatically adjusts for different screen sizes:
- Large screens: Multi-column layouts
- Medium screens: Responsive grids
- Small screens: Single-column layouts

## 🛠️ Technical Details

### Dependencies (loaded from CDN)

- **Reveal.js 4.5.0**: Presentation framework
- **Chart.js 4.4.0**: Interactive hardware development chart
- **Chart.js Annotation Plugin**: Timeline markers on chart

### Browser Compatibility

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Opera 76+  

### No Build Process Required

This is a **pure HTML/CSS/JavaScript** presentation. No npm, webpack, or build tools needed!

## 📚 Key Concepts Covered

### Quantum Speedup Types

1. **Exponential** (rare): Shor's factoring, quantum simulation
2. **Quadratic** (more common): Grover's search
3. **Problem-specific** (practical): QAOA, VQE, annealing
4. **Heuristic/uncertain**: QNNs, variational methods

### Three-Tier Success Framework

- **Quantum Supremacy** (2019): Any task faster than classical
- **Quantum Utility** (2023+): Practical, relevant problems ← **Current Focus**
- **Practical Advantage** (Future): Both useful AND faster

### NISQ Era Characteristics

- 50-1000+ qubits
- No error correction
- Limited circuit depth
- Hybrid quantum-classical approaches
- Error mitigation techniques

### Key Challenges

- 📉 Barren Plateaus (vanishing gradients)
- 🎯 Trainability (optimization complexity)
- 🔄 Problem Encoding (data embedding)
- ⚖️ Expressibility vs Entanglement (Goldilocks problem)

## 🔬 For Researchers

### Slide 12: Add Your Research

This slide includes a dedicated section for your quantum annealing work. Replace the placeholder text with:

- Your specific contributions
- Research findings and results
- Applications and use cases
- Novel approaches or techniques

### Extend the Presentation

Easy ways to add your content:

1. **Add slides**: Copy a `<section>` block in `index.html`
2. **Add references**: Create a new slide with citations
3. **Add images**: Place images in a `/images/` folder and reference them
4. **Add animations**: Use Reveal.js fragment classes for step-by-step reveals

## 📖 References & Resources

Key papers and resources:

- **NISQ Era**: Preskill, J. (2018). "Quantum Computing in the NISQ era and beyond"
- **Variational Algorithms**: Cerezo et al. (2021). "Variational quantum algorithms"
- **Barren Plateaus**: McClean et al. (2018). "Barren plateaus in quantum neural network training landscapes"
- **Quantum Utility**: IBM Quantum (2023). "Utility-scale quantum computing"
- **Quantum Annealing**: D-Wave Systems documentation and research papers

## 🎓 Conference Tips

### Before Your Talk

- [ ] Add your name and affiliation (slide 1)
- [ ] Insert your quantum annealing research (slide 12)
- [ ] Add your contact info (slide 16)
- [ ] Test the presentation on the conference computer
- [ ] Check that the interactive chart loads properly
- [ ] Practice navigation and timing

### During Your Talk

- Use **arrow keys** to navigate smoothly
- Highlight the **interactive chart** on slide 4
- Emphasize the **color coding** in the bubble diagram (slide 6)
- Pause at the **Quantum Utility** framework (slide 7) - this is the key message
- Spend adequate time on **challenges** (slide 13) - shows depth
- End with the powerful quote: **"Quantum advantage may be hard, but quantum utility is within reach"**

### Timing Guide (for 20-25 minute talk)

- Slides 1-3 (Intro & Timeline): 3-4 minutes
- Slides 4-5 (Hardware): 3-4 minutes
- Slides 6-7 (Algorithms & Utility): 4-5 minutes
- Slides 8-9 (NISQ Era): 2-3 minutes
- Slides 10-12 (Variational & Your Research): 5-6 minutes
- Slides 13-14 (Challenges): 3-4 minutes
- Slides 15-16 (Conclusions): 2-3 minutes
- Questions: 5-10 minutes

## 🤝 Contributing

Improvements welcome! Feel free to:

- Update quantum hardware data with latest releases
- Add new algorithms to the bubble diagram
- Improve the visual design
- Add speaker notes
- Create alternative color themes

## 📧 Contact

**[Your Name]**  
[Your Email]  
[Your Institution]  
[Your Website/GitHub]

---

## 📄 License

This presentation is provided for academic and conference use. Please cite appropriately if using this structure for your own presentations.

---

**Built with**
- [Reveal.js](https://revealjs.com/) - HTML presentation framework
- [Chart.js](https://www.chartjs.org/) - JavaScript charting library
- Love for quantum computing ❤️⚛️

**Last updated**: April 2026