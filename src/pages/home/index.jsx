import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";

export default function Home() {
    return (
        <>
            <Tab activeTab="for-you">
                <StickyHeader title="Anasayfa">
                    <Tab.Items>
                        <Tab.Item id="for-you">
                            Sana Özel
                        </Tab.Item>
                        <Tab.Item id="following">
                            Takip Edilenler
                        </Tab.Item>
                    </Tab.Items>
                </StickyHeader>
                <Tab.Content id="for-you">
                    1.Content
                </Tab.Content>
                <Tab.Content id="following">
                    2. content
                </Tab.Content>
            </Tab>

            home componenti
        </>
    )
}