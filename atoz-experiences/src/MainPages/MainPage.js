import React from 'react';
import TopExp from '../ChildrenComponents/TopExp';
import AllExperienceCard from '../ChildrenComponents/AllExperiencesCard'
import AllExperiencesCard from '../ChildrenComponents/AllExperiencesCard';

export default function MainPage () {
  const [activities, setActivities] = useState ([])

  useEffect(() => {
    const getActivityList = () => {
      axios
      .get("")
      .then(resp => {
        setActivities(resp.data.results);
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
    }

    getActivityList();
  }, []);

  return (
    <div>
      {activities.map(activity => (
        <AllExperiencesCard key={activity.category} activity={activity} city={activity.city} topic={activity.topic} start_date={activity.start_date} facet_values={activity.facet_values} />
      ))}
    </div>
  )
}