import { Card, GridContainer } from "@repo/ui"

const data = [
    {
        title:'title1',
        subtitle:'subtitle1',
        href:'https://google.fr',
        color: '#E3561A',
    },
    {
        title:'title2',
        subtitle:'subtitle2',
        href:'https://google.fr',
        color: '#468864',
    }
]
export const CardList = ({}) => {
    return (
        <GridContainer>
            {data.map(({title, subtitle, href, color}) => 
                <Card title={title} subtitle={subtitle} href={href} color={color} />
            )}
        </GridContainer>
    )
}