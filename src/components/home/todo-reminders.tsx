import { Badge, Card, List} from 'antd'
import { Text } from '../text'
import { useState } from 'react'
import NewInvoiceSkeleton from '../skeleton/new-invoices-skeleton'
import { useList } from '@refinedev/core'
import { getDate} from '@/utilities/helpers'
import { DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY } from '@/graphql/queries'


const ToDoReminders = () => {
  const [isLoading, setisLoading] = useState(false)
  const {data, isLoading: eventsLoading} = useList({
    resource: "events",
    pagination :{pageSize: 5},
    meta: {
      gqlQuery: DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY
    }

  });


  //alert(JSON.stringify(data))
  return (
    
    <Card
      style={{height: "100%"}}
      headStyle={{padding: "8px 16 px"}}
      bodyStyle={{padding: "0.1rem"}}
      title= {
        <div
          style={{
            display: "flex",
            alignItems:"center",
            gap: "8px"
          }}
        >
          <Text size='lg' style={{marginLeft:"0.7rem"}}>
            To Do / Reminders

          </Text>
          
        </div>
      }
    > 
      {isLoading ? (
        <List
          itemLayout='horizontal'
          dataSource={Array.from({length:5}).map((_, index) => ({
            id:index,
          }))}
          renderItem={() => <NewInvoiceSkeleton />}
        >

        </List>
      ) : (
        <List
          itemLayout='horizontal'
          dataSource={data?.data || []}
          renderItem={(item) => {
            const renderDate = getDate(item.startDate, item.endDate)
            return(
              <List.Item>
                <List.Item.Meta 
                  avatar={<Badge color={item.color} style={{marginLeft:"0.7rem"}}/>}
                  title={<Text size='xs'>{renderDate}</Text>}
                  description={<Text ellipsis={{tooltip:true}}strong>
                    {item.title}
                  </Text>}
                 
                />
                
              </List.Item>
            )
          }}
        >

        </List>
      )}
    </Card>

  )
}

export default ToDoReminders