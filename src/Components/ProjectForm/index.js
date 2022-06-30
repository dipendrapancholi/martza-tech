import React from 'react'
import {
    ProjectFormWrap,
    ProjectFormContainer,
    ProjectFormInner,
    ProjectRow,
    ProjectCol,
    ProjectMainForm,
    ProjectColTitle,
    FormInput,
    FormTextarea,
    FormSubmitButton
} from '../ProjectForm/style'
import { GrFormNextLink } from "react-icons/gr";

function ProjectForm() {
  return (
    <ProjectFormWrap data-aos="fade-up" data-aos-duration="2000">
        <ProjectFormContainer>
            <ProjectFormInner>
                <ProjectRow>
                    <ProjectCol>
                        <ProjectMainForm>
                            <FormInput type="text" placeholder="name" required />
                            <FormInput type="text" placeholder="comapny" required />
                            <FormInput type="email" placeholder="email" required />
                            <FormInput type="text" placeholder="Project title" required />
                            <FormInput type="text" placeholder="Your website" required />
                            <FormInput type="tel" placeholder="phone number (Optional)" />
                            <FormTextarea type="email" placeholder="tell us  more about your idea :  why where when" required />
                            <FormSubmitButton>
                                send your massage <GrFormNextLink />
                            </FormSubmitButton>
                        </ProjectMainForm>
                    </ProjectCol>
                    <ProjectCol>
                        <ProjectColTitle>
                            your project <span>start here</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="273" height="193" viewBox="0 0 273 193" fill="none">
                                <path d="M3.77891 145.033C1.59552 138.023 1.03688 130.117 3.67181 121.982C6.30608 113.849 12.1639 105.392 22.9792 97.3316C33.9301 89.1704 41.5681 85.0957 47.5404 82.6853C50.529 81.4791 53.1166 80.683 55.5227 79.9981C56.1178 79.8287 56.7056 79.6651 57.2877 79.5031C59.0433 79.0145 60.7468 78.5404 62.4412 77.965C71.6543 74.836 80.731 68.6684 102.847 40.576C124.937 12.5167 139.086 3.22168 150.548 1.6775C156.268 0.906964 161.43 2.04955 166.747 3.92417C169.064 4.74104 171.39 5.68871 173.807 6.67357C174.171 6.82208 174.538 6.97144 174.906 7.12132C177.711 8.26076 180.636 9.42416 183.747 10.437C189.802 12.409 194.576 14.7327 198.968 17.0953C200.293 17.8078 201.592 18.5293 202.886 19.2477C205.856 20.8971 208.797 22.5303 211.95 24.0013C221.112 28.2759 232.183 31.254 252.261 30.305C257.084 30.077 260.791 30.9516 263.594 32.585C266.389 34.214 268.368 36.6463 269.66 39.6865C272.266 45.8216 272.047 54.3845 269.958 63.3732C267.876 72.3262 263.981 81.5208 259.451 88.8079C257.187 92.4505 254.78 95.5919 252.383 97.9817C249.974 100.384 247.641 101.96 245.537 102.585C243.775 103.108 241.949 103.607 240.062 104.123C231.98 106.334 222.768 108.854 212.56 114.856C199.942 122.275 185.829 134.979 170.12 158.901C154.664 182.437 136.237 190.684 118.613 191.548C100.907 192.416 83.8739 185.836 71.2979 179.433C55.8796 171.583 49.2574 168.312 39.7358 166.719C32.0308 165.431 24.1262 163.584 17.5906 160.247C11.0775 156.921 5.99736 152.155 3.77891 145.033Z" />
                            </svg>
                        </ProjectColTitle>
                    </ProjectCol>
                </ProjectRow>
            </ProjectFormInner>
        </ProjectFormContainer>
    </ProjectFormWrap>
  )
}

export default ProjectForm;