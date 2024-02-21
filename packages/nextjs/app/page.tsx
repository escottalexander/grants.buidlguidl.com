import { CommunityGrant } from "./_components/CommunityGrant";
import { CompletedGrants } from "./_components/CompletedGrants";
import { GrantsStats } from "./_components/GrantsStats";
import { HomepageHero } from "./_components/HomepageHero";

const Home = () => {
  return (
    <>
      <HomepageHero />
      <GrantsStats />
      <CommunityGrant />
      <CompletedGrants />
    </>
  );
};

export default Home;
