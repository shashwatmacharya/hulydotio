'use client'
import UnmatchedProductivityComp from "@/components/unmatchedProductivity/unmatchedProductivity";
import "./globals.css";
import EAFYTComp from "@/components/everythingAppForYourTeams/everythingAppForYourTeams";
export default function Home() {
  return (<div>
    <div>
      <EAFYTComp />
    </div>
    <div>
      <UnmatchedProductivityComp />
    </div>
  </div>);
}
