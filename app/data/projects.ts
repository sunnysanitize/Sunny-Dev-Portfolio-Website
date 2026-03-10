export interface Project {
  name: string;
  bullets: string[];
  shortDescription: string;
  projectUrl: string;
  showWebsiteButton?: boolean;
  sourceUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "Discrete-Time Markov Chain for Market Regime Forecasting",
    shortDescription:
      "A modular Python application that models daily equity return regimes (down/flat/up) using a first-order Markov chain and forecasts next-day state probabilities from historical price data. Includes a Flask dashboard with threshold tuning and Monte Carlo simulation.",
    bullets: [
      "A modular Python application that models daily equity return regimes (down/flat/up) using a first-order Markov chain and forecasts next-day state probabilities from historical price data.",
      "It takes and cleans CSV data, computes returns, discretizes regimes, builds a row-normalized transition matrix, and outputs conditional next-state probabilities based on the observed regime.",
      "Includes a CLI report tool, a Flask dashboard with threshold tuning and Monte Carlo simulation, plus unit tests for transition/state logic.",
    ],
    projectUrl: "",
    showWebsiteButton: false,
    sourceUrl:
      "https://github.com/sunnysanitize/Markov-Chain-Model-for-Daily-Return-Regimes",
    image: "/MarkovForecast.png",
  },
  {
    name: "Heat Mapping $5,000+ Thefts Around UTSG",
    shortDescription:
      "A full-stack crime intelligence web app that maps Toronto Police theft-over-$5,000 incidents around the UofT St. George campus. Runs a Python/FastAPI pipeline with SQLite and a Next.js frontend featuring an interactive OpenStreetMap heatmap.",
    bullets: [
      "I got my stuff stolen at the Athletic Centre at UofT and almost lost most of my valuables, so I decided to make a project on theft around UTSG.",
      "A full-stack crime intelligence web app that maps Toronto Police theft-over-$5,000 incidents around the UofT St. George campus.",
      "It runs a Python/FastAPI pipeline that filters records by campus geospatial boundaries, normalizes data in SQLite, and serves a clean API.",
      "Includes a Next.js/TypeScript frontend with an interactive OpenStreetMap heatmap, live summary metrics, and incident sample tables.",
    ],
    projectUrl: "https://theftdataproject.sunnyzhang.dev",
    sourceUrl: "https://github.com/sunnysanitize/uoft-theft-map-project",
    image: "/theftdatabase.png",
  },
  {
    name: "Stochastic Risk Modeling: Gambler's Ruin Simulation",
    shortDescription:
      "A Gambler's Ruin simulation platform in Python combining Monte Carlo experimentation with closed-form probability analysis. Supports up to 100k trials per run with Flask and Streamlit web workflows and an interactive Plotly dashboard.",
    bullets: [
      "Built a Gambler's Ruin simulation platform in Python that combines Monte Carlo experimentation with closed-form probability analysis.",
      "It validates stochastic outcomes against theory and is organized as a reusable package (simulation, analytics, visualization, cli, and webapp).",
      "It supports up to 100k trials per run with both command-line and interactive web workflows using Flask and Streamlit.",
      "I implemented convergence diagnostics, empirical-theoretical error tracking, and an interactive Plotly dashboard for reproducible analysis.",
    ],
    projectUrl: "",
    showWebsiteButton: false,
    sourceUrl: "https://github.com/sunnysanitize/gamblers-ruin-simulatior",
    image: "/GamblersRuin.png",
  },
];
