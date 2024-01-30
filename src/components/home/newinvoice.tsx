
import { Card, List } from 'antd'
import { Text } from '../text'
import { useState } from 'react'
import NewInvoiceSkeleton from '../skeleton/new-invoices-skeleton'


const NewInvoice = () => {
  const [isLoading, setisLoading] = useState(false)
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
            New Invoice

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
        dataSource={[]}
        renderItem={(item) => {
          return(
            <List.Item>
              <List.Item.Meta />
            </List.Item>
          )
        }}
        >

        </List>
      )}
    </Card>

  )
}

export default NewInvoice