import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Scheduler,
  DayView,
  SchedulerItem,
} from '@progress/kendo-react-scheduler';
const sampleData = [
  {
    id: 0,
    title: 'KendoReact Release Webinar',
    start: new Date('2020-01-23T09:30:00.000Z'),
    end: new Date('2020-01-23T10:30:00.000Z'),
    image:
      'https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/release_webinar_kui_1920x440_lp.png?sfvrsn=23989f80_0',
  },
];
const displayDate = new Date('2020-01-23T09:30:00.000Z');

const CustomItem = (props) => {
  console.log(props);

  console.log('props', props);
  return (
    <SchedulerItem
      {...props}
      style={{
        ...props.style,
        textDecoration: 'line-through',
      }}
    />
  );
};

const App = () => {
  return (
    <Scheduler
      timezone="Etc/UTC"
      data={sampleData}
      defaultDate={displayDate}
      item={CustomItem}
    >
      <DayView />
    </Scheduler>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
